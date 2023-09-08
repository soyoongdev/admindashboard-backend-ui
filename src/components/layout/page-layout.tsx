import { forwardRef } from 'react'
import { cn } from '~/lib/utils'

interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>(({ children, className }, ref) => {
  return (
    <div className={cn('min-w-screen min-h-screen flex-1 space-y-8', className)} ref={ref}>
      {children}
    </div>
  )
})

PageLayout.displayName = 'PageLayout'

export default PageLayout
