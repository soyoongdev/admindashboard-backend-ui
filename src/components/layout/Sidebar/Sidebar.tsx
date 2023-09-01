import { sidebarRoutes } from '~/utils/routes'
import SidebarItem from './SidebarItem'
import logo from '~/assets/react.svg'
import { useState } from 'react'
import ToggleDarkMode from '~/components/ui/ToggleDarkMode'
import { useDarkMode } from '~/hooks/useDarkMode'
import { cn } from '~/utils/cn'

function Sidebar() {
  const [index, setIndex] = useState(0)
  const { isDarkMode } = useDarkMode()

  return (
    <div
      className={cn('h-full w-full max-w-[250px]', {
        'bg-secondary': isDarkMode,
        'bg-white': !isDarkMode
      })}
    >
      <div className='flex h-full w-full flex-col justify-between px-12 py-10'>
        <div className='flex flex-row items-center gap-2'>
          <img src={logo} alt='logo' className='h-10 w-10 object-center' />
          <h1
            className={cn('text-2xl font-semibold text-light', {
              'text-light': isDarkMode,
              'text-dark': !isDarkMode
            })}
          >
            Assist
          </h1>
        </div>
        <div className='flex flex-col items-center gap-3'>
          {sidebarRoutes.map((item, i) => {
            return (
              <SidebarItem
                key={i}
                item={item}
                isActive={index === i}
                onChildClick={() => setIndex(i)}
              />
            )
          })}
        </div>
        <div className='relative flex items-center'>
          <ToggleDarkMode />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
