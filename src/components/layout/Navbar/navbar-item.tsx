import { forwardRef } from 'react'
import { cn } from '~/utils/cn'

interface NavbarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  onChildClick: () => void
}

const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ onChildClick, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex w-full flex-row items-center gap-2 rounded-md bg-dark p-2 text-light text-white transition-colors duration-200 dark:text-dark dark:hover:bg-dark dark:hover:text-white',
          className
        )}
        onClick={onChildClick}
      ></div>
    )
  }
)

NavbarItem.displayName = 'NavbarItem'

export default NavbarItem
