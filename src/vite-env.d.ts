/// <reference types="vite/client" />
import { LucideIcon } from 'lucide-react'

export type SidebarRoute = {
  path: string
  name: string
  icon: LucideIcon
  component: () => JSX.Element
  layout: string
}
