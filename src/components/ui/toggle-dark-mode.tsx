import { Monitor, Moon, SunMedium } from 'lucide-react'
import { forwardRef } from 'react'
import { useDarkMode } from '~/hooks/useDarkMode'
import { cn } from '~/utils/cn'

interface ToggleDarkModeProps extends React.HTMLAttributes<HTMLButtonElement> {}

const ToggleDarkMode = forwardRef<HTMLButtonElement, ToggleDarkModeProps>(({ onClick, className, ...props }, ref) => {
  const { setTheme, theme } = useDarkMode()

  return (
    <button
      ref={ref}
      {...props}
      onClick={onClick}
      className={cn(
        'relative m-auto flex h-11 w-[138px] flex-row items-center justify-between rounded-full border border-muted dark:border-white',
        className
      )}
    >
      <div
        className={cn(
          'absolute z-0 h-9 w-9 rounded-full bg-dark transition-transform duration-300 ease-in-out dark:bg-primary',
          {
            'translate-x-[4px]': theme === 'light',
            'translate-x-[50px]': theme === 'dark',
            'translate-x-[96px]': theme === 'system'
          }
        )}
      />
      <SunMedium
        onClick={() => setTheme('light')}
        size={24}
        className={cn(
          'relative left-[10px] z-10 h-6 w-6 text-dark opacity-75 transition-colors duration-500 ease-in-out dark:text-light',
          {
            'text-primary opacity-100': theme === 'light'
          }
        )}
      />
      <Moon
        onClick={() => setTheme('dark')}
        size={24}
        className={cn('z-10 h-6 w-6 text-dark opacity-75 transition-colors duration-500 ease-in-out dark:text-light', {
          'text-primary opacity-100': theme === 'dark'
        })}
      />
      <Monitor
        onClick={() => setTheme('system')}
        size={24}
        className={cn(
          'relative right-[10px] z-10 h-6 w-6 text-dark opacity-75 transition-colors duration-500 ease-in-out dark:text-light',
          {
            'text-primary opacity-100': theme === 'system'
          }
        )}
      />
    </button>
  )
})

ToggleDarkMode.displayName = 'ToggleDarkMode'

export default ToggleDarkMode
