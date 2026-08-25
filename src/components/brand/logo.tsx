import React from 'react'

/** Neptunor brand mark — PNG icon. `compact` mode is identical (icon-only, no wordmark). */
function LogoInner({ size = 28, compact: _compact }: { size?: number; compact?: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-center">
      <img
        src="/Neptunor_Logo.png"
        alt="Neptunor"
        width={size}
        height={size}
        className="block"
        draggable={false}
      />
    </span>
  )
}
export const Logo = React.memo(LogoInner)
