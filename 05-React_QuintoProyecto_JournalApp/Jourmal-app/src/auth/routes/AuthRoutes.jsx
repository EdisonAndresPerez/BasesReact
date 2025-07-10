
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPages, RegisterPages } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>
      {/* Login y registro */}
      <Route path="/login" element={<LoginPages/>} />
      <Route path="/register" element={<RegisterPages/>} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
