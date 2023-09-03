import { Moon, SunMedium } from 'lucide-react'
import { forwardRef } from 'react'
import { useDarkMode } from 'usehooks-ts'
import { cn } from '~/utils/cn'

interface ToggleDarkModeProps extends React.HTMLAttributes<HTMLButtonElement> {}

const ToggleDarkMode = forwardRef<HTMLButtonElement, ToggleDarkModeProps>(
  ({ onClick, className, ...props }, ref) => {
    const { isDarkMode } = useDarkMode()

    return (
      <button
        ref={ref}
        {...props}
        onClick={onClick}
        className={cn(
          'relative m-auto flex h-10 w-20 flex-row items-center justify-between rounded-full border border-muted p-1 dark:border-white',
          className
        )}
      >
        <div
          className={cn(
            'absolute left-[2px] z-0 h-8 w-8 rounded-full bg-dark transition-transform duration-300 ease-in-out dark:bg-primary',
            {
              ' translate-x-10': isDarkMode,
              'translate-x-0': !isDarkMode
            }
          )}
        />
        <SunMedium
          size={24}
          className='relative left-[2px] z-10 h-6 w-6 text-white opacity-100 transition-colors duration-500 ease-in-out dark:text-light dark:opacity-75'
        />
        <Moon
          size={24}
          className='right-[2px] z-10 h-6 w-6 text-dark opacity-75 transition-colors duration-500 ease-in-out dark:text-light dark:opacity-100'
        />
      </button>
    )
  }
)

ToggleDarkMode.displayName = 'ToggleDarkMode'

export default ToggleDarkMode
