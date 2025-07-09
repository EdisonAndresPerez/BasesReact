import { HeroList } from "../componets/HeroList"

export const MarvelPage = () => {
  return (
    <div>
      <h1>Marvel Comics</h1>
      <hr />
      <p>Página dedicada a los héroes de Marvel Comics</p>
      
      <div className="row">
        <HeroList publisher="Marvel Comics" />
      </div>
    </div>
  )
}
