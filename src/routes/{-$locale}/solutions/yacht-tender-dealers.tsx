import { createFileRoute } from '@tanstack/react-router'
import { solutionRoute } from '@/components/marketing/solution-route'

export const Route = createFileRoute('/{-$locale}/solutions/yacht-tender-dealers')(solutionRoute('yacht-tender-dealers'))
