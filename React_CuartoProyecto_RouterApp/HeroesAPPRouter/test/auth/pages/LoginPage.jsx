import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log('Location state:', location.state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulación de login (en una app real harías validación)
    if (email && password) {
      // Extraer nombre del email para personalizar la bienvenida
      const name = email.split('@')[0];
      await login({ email, name });
      
      // Redirigir a la última página visitada (desde el state) o a la raíz
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" 
         style={{
           background: 'linear-gradient(135deg,rgb(255, 255, 255) 0%, #764ba2 100%)',
           backgroundSize: 'cover'
         }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-lg border-0" style={{borderRadius: '15px'}}>
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <div className="mb-3">
                    <span style={{fontSize: '3rem'}}>🦸‍♂️</span>
                  </div>
                  <h2 className="card-title fw-bold text-primary">Heroes App</h2>
                  <p className="text-muted">Iniciar Sesión</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">📧 Email</label>
                    <input 
                      type="email" 
                      className="form-control form-control-lg" 
                      id="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ingresa tu email"
                      required
                      style={{
                        borderRadius: '10px',
                        border: '2px solid #e2e8f0',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#667eea';
                        e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold">🔒 Contraseña</label>
                    <input 
                      type="password" 
                      className="form-control form-control-lg" 
                      id="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Ingresa tu contraseña"
                      required
                      style={{
                        borderRadius: '10px',
                        border: '2px solid #e2e8f0',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#667eea';
                        e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  
                  <div className="d-grid">
                    <button 
                      type="submit" 
                      className="btn btn-lg fw-bold"
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        border: 'none',
                        borderRadius: '10px',
                        color: 'white',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.6)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                      }}
                    >
                      🚀 Iniciar Sesión
                    </button>
                  </div>
                </form>
                
                <div className="text-center mt-4">
                  <div className="alert alert-info" style={{
                    borderRadius: '10px',
                    backgroundColor: '#f0f8ff',
                    border: '1px solid #bee5eb'
                  }}>
                    <small>
                      💡 <strong>Tip:</strong> Usa cualquier email y contraseña para acceder
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
