import { InfoItem } from "../components/InfoItem";
import { useFetchGifs } from "../hooks/UseFetchGifs";

export default function GifGrid({ categoria }) {
  const { characters, loading } = useFetchGifs(categoria);

  return (
    <>
      {loading && <p>Cargando personajes...</p>}
      {!loading && characters.length === 0 && (
        <h3>No se encontraron personajes con ese nombre</h3>
      )}
      <div className="card-grid">
        {characters.map(character => (
          <InfoItem key={character.id} {...character} />
        ))}
      </div>
    </>
  );
}
