import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import AuthLayout from './components/layout/AuthLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<AdminLayout />} />
        <Route path={`/auth`} element={<AuthLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
