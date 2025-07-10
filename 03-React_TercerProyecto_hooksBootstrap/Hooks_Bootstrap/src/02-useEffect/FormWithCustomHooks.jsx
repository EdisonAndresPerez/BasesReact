import { useEffect } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHooks = () => {
  //Es mejor siempre tener los efectos separados por cada variable que se quiera observar
  //En este caso, tenemos dos useEffect, uno para username y otro para email.

  const { formState, handleChange, username, email, password, resetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });



  //Cuando colocamos [] como segundo argumento, el useEffect se ejecuta una sola vez al montar el componente
  //Si colocamos [username] como segundo argumento, el useEffect se ejecuta cada
  //vez que el username cambie, es decir, cada vez que se modifique el valor del input de username.
  useEffect(() => {
    console.log("useEffect for username called");
  }, [username]);

  useEffect(() => {
    console.log("useEffect for email called");
  }, [email]);

  useEffect(() => {
    console.log("useEffect for password called");
  }, [password]);

  return (
    <>
      <h1>Formulario con custom hooks simple</h1>
      <input
        type="text"
        placeholder="nombre"
        className="form-control mt-2"
        name="username"
        value={username}
        onChange={handleChange}
      />

      <input
        type="email"
        placeholder="correo@gmail.com"
        className="form-control mt-2"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <input
        type="password"
        placeholder="Contraseña"
        className="form-control mt-2"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <button onClick={resetForm} className="btn btn-primary mt-2">Reiniciar formulario</button>

      {
        // Renderiza el componente <Message /> solo si el username es exactamente 'andres'.
        // Es una renderización condicional usando el operador lógico && en JSX.
        username === "andres" && <Message />
      }
    </>
  );
};
