import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PublicRoute } from "../auth/components/PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const APProuter = () => {
  return (
    <Routes>
      <Route path="/login" element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      } />
      <Route path="/*" element={
        <PrivateRoute>
          <HeroesRoutes />
        </PrivateRoute>
      } />
    </Routes>
  );
};
