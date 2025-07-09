import { useParams, Navigate } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';
import { HeroCard } from '../componets/HeroCard';

export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <HeroCard
            id={hero.id}
            superhero={hero.superhero}
            publisher={hero.publisher}
            alter_ego={hero.alter_ego}
            first_appearance={hero.first_appearance}
            characters={hero.characters}
          />
        </div>
      </div>
    </div>
  );
};
