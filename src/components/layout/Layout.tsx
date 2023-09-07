import { forwardRef } from 'react'
import { cn } from '~/lib/utils'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ children, className }, ref) => {
  return (
    <div className={cn('min-w-screen darK:bg-dark bg-light min-h-screen', className)} ref={ref}>
      {children}
    </div>
  )
})

Layout.displayName = 'Layout'

export default Layout
