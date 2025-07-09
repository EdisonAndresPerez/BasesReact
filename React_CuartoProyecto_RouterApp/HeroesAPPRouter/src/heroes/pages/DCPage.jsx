import { HeroList } from "../componets/HeroList"

export const DCPage = () => {
  return (
    <div>
      <h1>DC Comics</h1>
      <hr />
      <p>Página dedicada a los héroes de DC Comics</p>
      
      <div className="row">
        <HeroList publisher="DC Comics" />
      </div>
    </div>
  )
}
