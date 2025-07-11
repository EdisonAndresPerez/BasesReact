
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.jsx";
import store from "./store/store";
import { Provider } from "react-redux";
import { PokemonApp } from "./PokemonApp";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PokemonApp/>
  </Provider>
);
