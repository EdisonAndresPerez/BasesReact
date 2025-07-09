import { useState } from 'react';
import { HeroCard } from '../componets/HeroCard';
import { heroes } from '../data/heroes';
import { useNavigate } from 'react-router-dom';

export const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const [foundHero, setFoundHero] = useState(null);
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    setTouched(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
    const hero = heroes.find(h =>
      h.superhero.toLowerCase().includes(searchText.trim().toLowerCase())
    );
    setFoundHero(hero || null);
    setTouched(true);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">🔎 Buscar Héroe</h2>
      <form className="mb-4" onSubmit={handleSearch} autoComplete="off">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Ej: Spider Man, Batman, Iron Man..."
                value={searchText}
                onChange={handleInputChange}
              />
              <button className="btn btn-primary btn-lg" type="submit">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {touched && !foundHero && (
            <div className="alert alert-danger text-center">
              No se encontró ningún héroe con ese nombre.
            </div>
          )}
          {foundHero && (
            <HeroCard {...foundHero} />
          )}
        </div>
      </div>
    </div>
  );
};
