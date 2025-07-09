import { Routes, Route } from "react-router-dom";
import { Navigate} from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";



export const MainApp = () => {
  return (
    <UserProvider>
      <h1>main app</h1>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </UserProvider>
  );
};
