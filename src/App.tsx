import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layout/admin-layout'
import AuthLayout from './components/layout/auth-layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={`/`} element={<Navigate to='/admin' replace={true} />} /> */}
        <Route path={`/*`} element={<AdminLayout />} />
        <Route path={`/auth/*`} element={<AuthLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
