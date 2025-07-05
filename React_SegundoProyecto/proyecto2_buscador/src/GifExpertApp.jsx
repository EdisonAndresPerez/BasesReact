import React, { useState } from "react";
import "./styles.css";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GifExpertApp() {
  const [categoria, setCategoria] = useState([
    "Naruto",
    "Dragon ball",
    "Demos slayer",
    "Minecraft",
  ]);

  const onAddCategoria = (newCategoria) => {
    if (categoria.includes(newCategoria)) return;

    setCategoria([...categoria, newCategoria]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategoria={onAddCategoria} />

      {categoria.map((categoria) => (
        <GifGrid key={categoria} categoria={categoria} />
      ))}
    </>
  );
}
