import { useLocation } from 'react-router-dom'
import { TypographyH3 } from '~/components/ui/typography'
import { publicRoutes } from '~/lib/routes'
import { cn } from '~/lib/utils'
import SidebarItem from './sidebar-item'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation()

  return (
    <div className={cn('my-4 w-full max-w-[267px] border-r pb-12', className)}>
      <div className='w-full space-y-4 py-4'>
        <div className='w-full px-3 py-2'>
          <TypographyH3 className='mb-2 px-4 tracking-tight'>Discover</TypographyH3>
          <div className='flex w-full flex-col gap-1 space-y-1'>
            {publicRoutes.map((route, index) => {
              return <SidebarItem key={index} item={route} isActive={location.pathname === route.path} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
