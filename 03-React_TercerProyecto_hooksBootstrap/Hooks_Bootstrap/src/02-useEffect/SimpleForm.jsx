import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "andres",
    email: "andres@gmail.com",
  });

  const { username, email } = formState;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //Es mejor siempre tener los efectos separados por cada variable que se quiera observar
  //En este caso, tenemos dos useEffect, uno para username y otro para email.


  //Cuando colocamos [] como segundo argumento, el useEffect se ejecuta una sola vez al montar el componente
  //Si colocamos [username] como segundo argumento, el useEffect se ejecuta cada
  //vez que el username cambie, es decir, cada vez que se modifique el valor del input de username.
  useEffect(() => {
    console.log("useEffect for username called");
  }, [username]);

  useEffect(() => {
    console.log("useEffect for email called");
  }, [email])

  return (
    <>
      <h1>Formulario simple</h1>
      <input
        type="text"
        placeholder="Ingresa algo"
        className="form-control mt-2"
        name="username"
        value={username}
        onChange={handleChange}
      />

      <input
        type="gmail"
        placeholder="correo@gmail.com"
        className="form-control mt-2"
        name="email"
        value={email}
        onChange={handleChange}
      />


    {
        (username === "andres" && <Message />)
    }

    </>
  );
};
