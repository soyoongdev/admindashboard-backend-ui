import { forwardRef } from 'react'
import { useDarkMode } from '~/hooks/useDarkMode'
import { cn } from '~/utils/cn'

interface NavbarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  onChildClick: () => void
}

const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ onChildClick, className }, ref) => {
    const { isDarkMode } = useDarkMode()

    return (
      <div
        ref={ref}
        className={cn(
          'flex w-full flex-row items-center gap-2 rounded-md p-2 text-light transition-colors duration-200',
          {
            'hover:bg-muted hover:text-primary': isDarkMode,
            'bg-muted text-primary': isDarkMode
          },
          {
            'text-dark hover:bg-dark hover:text-white': !isDarkMode,
            'bg-dark text-white': !isDarkMode
          },
          className
        )}
        onClick={onChildClick}
      ></div>
    )
  }
)

NavbarItem.displayName = 'NavbarItem'

export default NavbarItem
