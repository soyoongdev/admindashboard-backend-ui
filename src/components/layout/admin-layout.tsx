import { Outlet } from 'react-router-dom'
import Navbar from './navbar/navbar'
import { Sidebar } from './sidebar/sidebar'

function AdminLayout() {
  return (
    <div className='min-w-screen darK:bg-dark bg-light relative flex min-h-screen flex-row'>
      <Sidebar />
      <Navbar />
      <div className='relative top-28 ml-[var(--sidebar)] flex h-full w-full flex-col gap-10 px-8 py-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
