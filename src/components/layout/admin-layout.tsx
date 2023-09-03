import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Navbar from './navbar/navbar'
import Sidebar from './sidebar/sidebar'
import { sidebarRoutes } from '~/utils/routes'

function AdminLayout() {
  return (
    <Layout className={'flex flex-row'}>
      <Sidebar />
      <div className='flex h-full w-full flex-col p-8'>
        <Navbar />
        <Routes>
          {sidebarRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            )
          })}
        </Routes>
      </div>
    </Layout>
  )
}

export default AdminLayout
