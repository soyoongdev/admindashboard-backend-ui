import { Home, Users2, Building2, CalendarDays, Send, AlignStartVertical, PencilRuler } from 'lucide-react'
import Dashboard from '~/pages/dashboard'
import Task from '~/pages/users'
import Companies from '~/pages/company'
import Users from '~/pages/users'
import Resumes from '~/pages/reumes'
import Levels from '~/pages/levels'
import Roles from '~/pages/roles'
import { SidebarItems } from '~/vite-env'
import CompanyDetail from '~/pages/company-detail'

export const publicRoutes: SidebarItems[] = [
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    icon: Home,
    component: Dashboard,
    layout: 'admin'
  },
  {
    path: '/admin/companies',
    name: 'Company',
    icon: Building2,
    component: Companies,
    layout: 'admin',
    children: {
      path: ':companyID',
      name: 'Company details',
      component: CompanyDetail
    }
  },
  {
    path: '/admin/users',
    name: 'User',
    icon: Users2,
    component: Users,
    layout: 'admin'
  },
  {
    path: '/admin/jobs',
    name: 'Job',
    icon: CalendarDays,
    component: Task,
    layout: 'admin'
  },
  {
    path: '/admin/resumes',
    name: 'Resume',
    icon: Send,
    component: Resumes,
    layout: 'admin'
  },
  {
    path: '/admin/levels',
    name: 'Level',
    icon: AlignStartVertical,
    component: Levels,
    layout: 'admin'
  },
  {
    path: '/admin/roles',
    name: 'Role',
    icon: PencilRuler,
    component: Roles,
    layout: 'admin'
  }
]
