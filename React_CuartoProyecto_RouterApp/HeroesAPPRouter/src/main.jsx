import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppHero } from './AppHero.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppHero />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
