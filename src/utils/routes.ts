import {
  Home,
  Users2,
  Building2,
  CalendarDays,
  Send,
  AlignStartVertical,
  PencilRuler
} from 'lucide-react'
import Dashboard from '~/pages/dashboard'
import Task from '~/pages/users'
import { SidebarRoute } from '~/vite-env'
import Companies from '~/pages/company'
import Users from '~/pages/users'
import Resumes from '~/pages/reumes'
import Levels from '~/pages/levels'
import Roles from '~/pages/roles'

export const sidebarRoutes: SidebarRoute[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Home,
    component: Dashboard,
    layout: '/admin'
  },
  {
    path: '/companies',
    name: 'Companies',
    icon: Building2,
    component: Companies,
    layout: '/admin'
  },
  {
    path: '/users',
    name: 'Users',
    icon: Users2,
    component: Users,
    layout: '/admin'
  },
  {
    path: '/jobs',
    name: 'Jobs',
    icon: CalendarDays,
    component: Task,
    layout: '/admin'
  },
  {
    path: '/resumes',
    name: 'Resumes',
    icon: Send,
    component: Resumes,
    layout: '/admin'
  },
  {
    path: '/levels',
    name: 'Levels',
    icon: AlignStartVertical,
    component: Levels,
    layout: '/admin'
  },
  {
    path: '/roles',
    name: 'Roles',
    icon: PencilRuler,
    component: Roles,
    layout: '/admin'
  }
]
