import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron bg-dark text-white p-5 rounded mb-4 shadow">
            <h1 className="display-4 fw-bold">🦸‍♂️ Bienvenido a Heroes App</h1>
            <p className="lead">
              Explora el universo de los superhéroes de Marvel y DC Comics
            </p>
            <hr className="my-4 bg-white" />
            <p>
              Navega por las diferentes secciones para conocer más sobre tus héroes favoritos.
            </p>
          </div>
        </div>
      </div>
      
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-lg border-0" style={{background: 'linear-gradient(135deg, #e53e3e 0%, #c53030 100%)'}}>
            <div className="card-body text-white d-flex flex-column">
              <h5 className="card-title fw-bold fs-3">🕷️ Marvel Comics</h5>
              <p className="card-text flex-grow-1">
                Descubre los héroes del Universo Marvel: Spider-Man, Iron Man, Captain America y muchos más.
              </p>
              <Link 
                to="/marvel" 
                className="btn btn-light btn-lg fw-bold mt-auto"
                style={{
                  transition: 'all 0.3s ease',
                  borderRadius: '10px'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Ver Marvel →
              </Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card h-100 shadow-lg border-0" style={{background: 'linear-gradient(135deg, #3182ce 0%, #2c5282 100%)'}}>
            <div className="card-body text-white d-flex flex-column">
              <h5 className="card-title fw-bold fs-3">🦇 DC Comics</h5>
              <p className="card-text flex-grow-1">
                Explora los héroes del Universo DC: Batman, Superman, Wonder Woman y la Liga de la Justicia.
              </p>
              <Link 
                to="/dc" 
                className="btn btn-light btn-lg fw-bold mt-auto"
                style={{
                  transition: 'all 0.3s ease',
                  borderRadius: '10px'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Ver DC →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div className="text-center">
            <h3 className="text-muted">¡Elige tu universo favorito y comienza la aventura!</h3>
            <p className="text-muted">Cada universo tiene sus propios héroes únicos y emocionantes historias.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
