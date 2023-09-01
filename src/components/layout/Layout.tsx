import { forwardRef } from 'react'
import { useDarkMode } from '~/hooks/useDarkMode'
import { cn } from '~/utils/cn'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, className }, ref) => {
    const { isDarkMode } = useDarkMode()

    return (
      <div
        className={cn(
          'h-full w-full',
          {
            'bg-light': !isDarkMode
          },
          {
            'bg-dark': isDarkMode
          },
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
