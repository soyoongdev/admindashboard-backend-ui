import { forwardRef } from 'react'
import { cn } from '~/lib/utils'

interface NavbarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  onChildClick: () => void
}

const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>(({ onChildClick, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-dark text-light dark:text-dark dark:hover:bg-dark flex w-full flex-row items-center gap-2 rounded-md p-2 text-white transition-colors duration-200 dark:hover:text-white',
        className
      )}
      onClick={onChildClick}
    ></div>
  )
})

NavbarItem.displayName = 'NavbarItem'

export default NavbarItem
