import { MainNav } from '~/components/ui/main-nav'
import { Search } from '~/components/ui/search'
import TeamSwitcher from '~/components/ui/team-switcher'
import { UserNav } from '~/components/ui/user-nav'

const Navbar = () => {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-4'>
        <TeamSwitcher />
        <MainNav className='mx-6' />
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
  )
}

export default Navbar
