import { Outlet } from 'react-router-dom'
import Layout from './layout'
import { Sidebar } from './sidebar/sidebar'

function AdminLayout() {
  return (
    <Layout className='flex flex-row'>
      <Sidebar />
      <div className='flex h-full w-full flex-col'>
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </Layout>
  )
}

export default AdminLayout
