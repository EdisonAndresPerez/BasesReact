import Nav from "./components/nav/Nav.jsx";
import Button from "./components/button/Button.jsx"
import Titulo from './components/title/Titulo.jsx'

function App() {
  return (
    <>
      <Nav></Nav>
      <h1>Info</h1>
      <div className="info">
        <h3>informacion</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          doloribus laudantium vero, quis deserunt laborum tenetur deleniti
          cumque voluptas incidunt quo porro possimus minus facere nam, expedita
          iure illum dolorum.
        </p>
        <Button></Button>
      </div>

      <section className="section">
        
      <div className="section_container">
        <h2>{10 + 21}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequatur aut at similique esse in blanditi</p>
      </div>

      <div className="section_container container2">
        <p>info</p>
        <p>nombre :Edison Andres</p>
        <p>aplleido : perez Martinez</p>
        <p>edad: 50</p>
      </div>
      </section>

      <section className="section2">
      <Titulo  />

      </section>
    </>
  );
} 

export default App;
