import Layout from './Layout'
import Sidebar from './Sidebar/Sidebar'

function AdminLayout() {
  return (
    <Layout className={'flex h-screen w-screen flex-row'}>
      <Sidebar />
      <div className=''>hello</div>
    </Layout>
  )
}

export default AdminLayout
