import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { Link } from 'react-router-dom';
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);  

  return (
    <div className="col-12">
      <h3 className="text-center mb-4">
        🦸‍♂️ Héroes de {publisher === 'Marvel Comics' ? 'Marvel' : 'DC'}
      </h3>
      <div className="row    animate__animated animate__backInDown  ">
        {
          heroes.map(hero => (
            <div key={hero.id} className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '10px' }}>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title text-primary mb-0">{hero.superhero}</h5>
                    <span className={`badge ${publisher === 'Marvel Comics' ? 'bg-danger' : 'bg-primary'} fs-6`}>
                      {publisher === 'Marvel Comics' ? 'Marvel' : 'DC'}
                    </span>
                  </div>
                  
                  <p className="card-text mb-2">
                    <strong className="text-secondary">🎭 Alter ego:</strong> 
                    <span className="ms-2">{hero.alter_ego}</span>
                  </p>
                  
                  <p className="card-text mb-2">
                    <strong className="text-secondary">📖 Primera aparición:</strong> 
                    <span className="ms-2">{hero.first_appearance}</span>
                  </p>
                  
                  <div className="mt-auto">
                    <Link 
                      to={`/hero/${hero.id}`} 
                      className="btn btn-outline-primary w-100 fw-bold"
                      style={{
                        borderRadius: '8px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,123,255,0.3)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      Ver más 👁️
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
