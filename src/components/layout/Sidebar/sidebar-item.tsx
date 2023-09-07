import { ShieldQuestion } from 'lucide-react'
import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '~/components/ui/button'
import { SidebarItems } from '~/vite-env'

interface SidebarItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  item: SidebarItems
  isActive: boolean
}

const SidebarItem = forwardRef<HTMLAnchorElement, SidebarItemProps>(({ item, isActive, className }, ref) => {
  return (
    <Link to={item.path} ref={ref} className={className}>
      <Button variant={`${isActive ? 'secondary' : 'ghost'}`} className='flex w-full flex-row justify-start gap-2'>
        {item.icon ? <item.icon size={20} /> : <ShieldQuestion />}
        {item.name}
      </Button>
    </Link>
  )
})

SidebarItem.displayName = 'SidebarItem'

export default SidebarItem
