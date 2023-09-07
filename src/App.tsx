import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layout/admin-layout'
import AuthLayout from './components/layout/auth-layout'
import { publicRoutes } from './lib/routes'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/admin' replace />} />
      <Route path='/admin' element={<AdminLayout />}>
        <Route path='auth' element={<AuthLayout />} />
        {publicRoutes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={<route.component />}>
              {route.children && <Route path={route.children.path} element={<route.children.component />} />}
            </Route>
          )
        })}
      </Route>
    </Routes>
  )
}

export default App
