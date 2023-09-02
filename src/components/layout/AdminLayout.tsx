import Layout from './Layout'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

function AdminLayout() {
  return (
    <Layout className={'flex h-screen w-screen flex-row'}>
      <Sidebar />
      <div className='flex h-full w-full flex-col p-8'>
        <Navbar />
        <div className='text-primary'>content</div>
      </div>
    </Layout>
  )
}

export default AdminLayout
