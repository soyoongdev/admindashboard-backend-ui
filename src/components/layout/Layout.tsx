import { forwardRef } from 'react'
import { cn } from '~/utils/cn'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, className }, ref) => {
    return (
      <div
        className={cn(
          'min-w-screen darK:bg-dark min-h-screen bg-light',
          className
        )}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

Layout.displayName = 'Layout'

export default Layout
