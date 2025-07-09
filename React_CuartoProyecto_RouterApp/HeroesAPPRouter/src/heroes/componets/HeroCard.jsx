
import { Link } from 'react-router-dom';

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  
  // Función para obtener la imagen del héroe
  const getHeroImage = (heroId) => {
    return `/src/assets/heroes/${heroId}.jpg`;
  };

  return (
    <div className="card shadow-lg border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
      <div className="row no-gutters">
        <div className="col-md-5">
          <img 
            src={getHeroImage(id)} 
            alt={superhero}
            className="img-fluid  animate__animated animate__tada "
            style={{ 
              height: '100%', 
              objectFit: 'cover',
              minHeight: '400px'
            }}
          />
        </div>
        
        <div className="col-md-7">
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <h2 className="card-title text-primary fw-bold mb-0">{superhero}</h2>
              <span className={`badge ${publisher === 'Marvel Comics' ? 'bg-danger' : 'bg-primary'} fs-5`}>
                {publisher === 'Marvel Comics' ? 'Marvel' : 'DC'}
              </span>
            </div>
            
            <div className="mb-4">
              <h5 className="text-secondary mb-3">Información del Héroe</h5>
              
              <div className="mb-3">
                <strong className="text-dark">🎭 Alter ego:</strong> 
                <p className="ms-3 mb-2">{alter_ego}</p>
              </div>
              
              <div className="mb-3">
                <strong className="text-dark">📖 Primera aparición:</strong> 
                <p className="ms-3 mb-2">{first_appearance}</p>
              </div>
              
              <div className="mb-3">
                <strong className="text-dark">🏢 Editorial:</strong> 
                <p className="ms-3 mb-2">{publisher}</p>
              </div>
              
              <div className="mb-3">
                <strong className="text-dark">👥 Personajes:</strong>
                <p className="ms-3 text-muted fst-italic">{characters}</p>
              </div>
            </div>
            
            <div className="d-flex gap-2">
              <Link 
                to={publisher === 'Marvel Comics' ? '/marvel' : '/dc'} 
                className="btn btn-secondary flex-fill"
                style={{ borderRadius: '8px' }}
              >
                ← Volver a {publisher === 'Marvel Comics' ? 'Marvel' : 'DC'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
