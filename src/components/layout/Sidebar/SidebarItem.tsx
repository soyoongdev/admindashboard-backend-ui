import { forwardRef } from 'react'
import { useDarkMode } from '~/hooks/useDarkMode'
import { cn } from '~/utils/cn'
import { SidebarRoute } from '~/vite-env'

interface SidebarItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  item: SidebarRoute
  isActive: boolean
  onChildClick: () => void
}

const SidebarItem = forwardRef<HTMLButtonElement, SidebarItemProps>(
  ({ item, isActive, onChildClick, className }, ref) => {
    const { isDarkMode } = useDarkMode()

    return (
      <button
        ref={ref}
        className={cn(
          'flex w-full flex-row items-center gap-2 rounded-md p-2 text-light transition-colors duration-200',
          {
            'hover:bg-muted hover:text-primary': isDarkMode,
            'bg-muted text-primary': isDarkMode && isActive
          },
          {
            'hover:text-white text-dark hover:bg-dark': !isDarkMode,
            'text-white bg-dark': !isDarkMode && isActive
          },
          className
        )}
        onClick={onChildClick}
      >
        <item.icon size={24} />
        <h2>{item.name}</h2>
      </button>
    )
  }
)

SidebarItem.displayName = 'SidebarItem'

export default SidebarItem
