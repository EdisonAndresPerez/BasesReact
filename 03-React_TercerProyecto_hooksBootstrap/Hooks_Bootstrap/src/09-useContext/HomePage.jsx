import React from 'react';

export const HomePage = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <hr />
      <div className="row">
        <div className="col">
          <div className="alert alert-primary" role="alert">
            ¡Bienvenido a la aplicación de React con Hooks y Context!
          </div>
          <p>
            Esta es la página principal donde puedes navegar por las diferentes
            secciones de la aplicación.
          </p>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Características</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">✅ React Hooks</li>
                <li className="list-group-item">✅ useContext para estado global</li>
                <li className="list-group-item">✅ Bootstrap para estilos</li>
                <li className="list-group-item">✅ Navegación entre páginas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
