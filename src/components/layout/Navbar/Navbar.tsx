import Breadcrumb from '~/components/ui/breadcrumb'
import { MainNav } from '~/components/ui/main-nav'
import { Search } from '~/components/ui/search'
import TeamSwitcher from '~/components/ui/team-switcher'
import { UserNav } from '~/components/ui/user-nav'
import { VStack } from '../stack'

const Navbar = () => {
  return (
    <VStack className='fixed left-0 right-0 top-0 z-[100] ml-[var(--sidebar)] h-28 gap-2 bg-background px-8'>
      <Breadcrumb />
      <div className='border-b'>
        <div className='flex h-16 items-center '>
          <TeamSwitcher />
          <MainNav className='mx-6' />
          <div className='ml-auto flex items-center space-x-4'>
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
    </VStack>
  )
}

export default Navbar
