import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '~/utils/cn'
import { SidebarRoute } from '~/vite-env'

interface SidebarItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  item: SidebarRoute
  isActive: boolean
}

const SidebarItem = forwardRef<HTMLAnchorElement, SidebarItemProps>(
  ({ item, isActive, className }, ref) => {
    return (
      <Link
        ref={ref}
        to={item.path}
        className={cn(
          'flex w-full flex-row gap-2 rounded-md p-2 text-dark transition-colors duration-200 hover:bg-dark hover:text-white dark:text-light dark:hover:bg-muted dark:hover:text-primary',
          {
            'bg-dark text-white dark:bg-muted dark:text-primary': isActive
          },
          className
        )}
      >
        <item.icon size={24} />
        <h2>{item.name}</h2>
      </Link>
    )
  }
)

SidebarItem.displayName = 'SidebarItem'

export default SidebarItem
