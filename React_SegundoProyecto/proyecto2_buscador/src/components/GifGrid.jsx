import  { useFetchGifs} from "../hooks/UseFetchGifs"
import { InfoItem } from "../components/InfoItem"

export default function GifGrid({categoria}) {
   // Usamos el hook personalizado para obtener los personajes y el estado de carga
   const { characters, loading } = useFetchGifs(categoria)

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
  )
}
