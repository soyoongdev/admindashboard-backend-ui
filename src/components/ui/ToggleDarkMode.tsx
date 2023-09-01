import { Moon, SunMedium } from 'lucide-react'
import { forwardRef } from 'react'
import { useDarkMode } from '~/hooks/useDarkMode'
import { cn } from '~/utils/cn'

interface ToggleDarkModeProps extends React.HTMLAttributes<HTMLButtonElement> {}

const ToggleDarkMode = forwardRef<HTMLButtonElement, ToggleDarkModeProps>(
  ({ className }, ref) => {
    const { isDarkMode, toggleDarkMode } = useDarkMode()

    return (
      <button
        ref={ref}
        className={cn(
          'relative m-auto flex h-10 w-20 flex-row items-center justify-between rounded-full border p-1',
          { 'border-white': isDarkMode, 'border-muted': !isDarkMode },
          className
        )}
        onClick={toggleDarkMode}
      >
        <div
          className={cn(
            'absolute z-0 h-8 w-8 rounded-full transition-transform duration-300 ease-in-out',
            {
              'left-[2px] translate-x-0 bg-dark': !isDarkMode,
              'translate-x-10 bg-primary': isDarkMode
            }
          )}
        />
        <SunMedium
          size={24}
          className={cn(
            'relative left-[2px] z-10 h-6 w-6 opacity-75 transition-colors duration-500 ease-in-out',
            {
              'text-light opacity-100': isDarkMode,
              'text-white opacity-100': !isDarkMode
            }
          )}
        />
        <Moon
          size={24}
          className={cn(
            'right-[2px] z-10 h-6 w-6 opacity-75 transition-colors duration-500 ease-in-out',
            {
              'text-light opacity-100': isDarkMode,
              'text-dark opacity-75': !isDarkMode
            }
          )}
        />
      </button>
    )
  }
)

ToggleDarkMode.displayName = 'ToggleDarkMode'

export default ToggleDarkMode
