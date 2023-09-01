import { Home, ClipboardList, BarChart2, Users2, Settings } from 'lucide-react'
import DashboardPage from '~/pages/dashboard'
import ProfilePage from '~/pages/profile'
import SettingsPage from '~/pages/settings'
import StatisticsPage from '~/pages/statistics'
import TaskPage from '~/pages/task'
import { SidebarRoute } from '~/vite-env'

export const sidebarRoutes: SidebarRoute[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Home,
    component: DashboardPage,
    layout: '/admin'
  },
  {
    path: '/task',
    name: 'My Tasks',
    icon: ClipboardList,
    component: TaskPage,
    layout: '/admin'
  },
  {
    path: '/statistics',
    name: 'Statistics',
    icon: BarChart2,
    component: StatisticsPage,
    layout: '/admin'
  },
  {
    path: '/profile',
    name: 'Profiles',
    icon: Users2,
    component: ProfilePage,
    layout: '/admin'
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: Settings,
    component: SettingsPage,
    layout: '/admin'
  }
]
