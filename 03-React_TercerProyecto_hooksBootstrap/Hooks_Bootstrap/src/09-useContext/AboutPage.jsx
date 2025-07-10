import React from 'react';

export const AboutPage = () => {
  return (
    <div className="container">
      <h1>About Page</h1>
      <hr />
      <div className="row">
        <div className="col">
          <p>
            Esta es la página About de nuestra aplicación de React con Context.
          </p>
          <p>
            Aquí puedes encontrar información sobre el proyecto y los hooks utilizados,
            especialmente el useContext para el manejo de estado global.
          </p>
        </div>
      </div>
    </div>
  );
};
