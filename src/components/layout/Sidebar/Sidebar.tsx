import { sidebarRoutes } from '~/utils/routes'
import SidebarItem from './sidebar-item'
import logo from '~/assets/react.svg'
import { useState } from 'react'
import ToggleDarkMode from '~/components/ui/toggle-dark-mode'
import { useDarkMode } from '~/hooks/useDarkMode'

function Sidebar() {
  const [index, setIndex] = useState(0)
  const { toggleDarkMode } = useDarkMode()

  return (
    <div className='w-full max-w-[250px] bg-white p-8 dark:bg-secondary'>
      <div className='flex h-full w-full flex-col justify-between'>
        <div className='flex flex-row items-center gap-2'>
          <img src={logo} alt='logo' className='h-10 w-10 object-center' />
          <h1 className='text-2xl font-semibold text-light dark:text-dark'>
            Assist
          </h1>
        </div>
        <div className='flex flex-col items-start gap-5'>
          {sidebarRoutes.map((item, i) => {
            return (
              <SidebarItem
                key={i}
                item={item}
                isActive={index === i}
                onClick={() => setIndex(i)}
              />
            )
          })}
        </div>
        <div className='relative flex items-center'>
          <ToggleDarkMode onClick={toggleDarkMode} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
