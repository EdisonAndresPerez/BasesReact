import { Routes, Route } from "react-router-dom";
import { DCPage, MarvelPage, HomePage, HeroPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/marvel" element={<MarvelPage />} />
      <Route path="/dc" element={<DCPage />} />
      <Route path="/hero/:id" element={<HeroPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};
