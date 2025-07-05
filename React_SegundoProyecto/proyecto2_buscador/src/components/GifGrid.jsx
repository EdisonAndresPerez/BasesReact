import  { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"
import { InfoItem } from "../components/InfoItem"

export default function GifGrid({categoria}) {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true)
      try {
        const charactersData = await getGifs(categoria)
        setCharacters(charactersData)
      } catch (error) {
        console.error('Error fetching characters:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchCharacters()
  }, [categoria])

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
