import { useState } from 'react'
import { Check, ChevronsUpDown, Globe } from 'lucide-react'
import { defaultLocale, type Locale } from './locale'
import { LOCALE_LABELS, ACTIVE_LOCALES } from '@/config/locales'
import { useTranslation } from './provider'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'

function switchLocaleTo(target: Locale) {
  const { pathname, search, hash } = window.location
  const currentPrefix = pathname.match(/^\/([a-z]{2}(-[A-Z]{2})?)(?=\/|$)/)?.[1]
  const stripped = currentPrefix ? pathname.slice(currentPrefix.length + 1) : pathname
  const clean = stripped || '/'
  const newPath =
    target === defaultLocale ? clean : `/${target}${clean === '/' ? '' : clean}`
  const url = newPath + search + hash
  document.cookie = `locale=${target}; path=/; max-age=31536000; samesite=lax`
  window.location.href = url
}

/**
 * Language selector rendered as a popup menu. Lists every locale in
 * ACTIVE_LOCALES with the current one marked — adding a language only
 * requires adding it to ACTIVE_LOCALES (and its dictionaries/content).
 * The popover ports to a portal, so it works from the nav, footer, app
 * shell and auth card alike.
 */
export function LangSwitch() {
  const { locale, t } = useTranslation()
  const [open, setOpen] = useState(false)

  if (ACTIVE_LOCALES.length < 2) return null

  const activeLocales = ACTIVE_LOCALES as readonly Locale[]
  const currentLabel = LOCALE_LABELS[locale]?.short ?? locale.toUpperCase()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        aria-label={t('common.language')}
        className="inline-flex h-[38px] items-center gap-1.5 rounded-lg border border-transparent px-2.5 text-sm font-semibold text-fg-2 transition-colors hover:bg-bg-alt hover:text-foreground"
      >
        <Globe size={17} />
        <span>{currentLabel}</span>
        <ChevronsUpDown size={12} className="opacity-60" />
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-1.5">
        <div className="px-2 pb-1.5 pt-1 text-xs font-semibold uppercase tracking-wide text-fg-3">
          {t('common.language')}
        </div>
        <div className="border-t border-border pt-1">
          {activeLocales.map((code) => {
            const l = LOCALE_LABELS[code] ?? { native: code, short: code.toUpperCase() }
            const active = code === locale
            return (
              <button
                key={code}
                type="button"
                aria-current={active ? 'true' : undefined}
                onClick={() => {
                  setOpen(false)
                  if (!active) switchLocaleTo(code)
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-[13px] font-medium transition-colors hover:bg-bg-alt hover:text-foreground ${
                  active ? 'text-foreground' : 'text-fg-2'
                }`}
              >
                <span>{l.native}</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-xs text-fg-3">{l.short}</span>
                  {active && <Check size={13} className="text-foreground" />}
                </span>
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}