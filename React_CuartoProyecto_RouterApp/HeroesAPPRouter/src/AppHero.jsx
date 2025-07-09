import { Navbar } from "./heroes/componets/Navbar"
import { APProuter } from "./router/APProuter"
import { useAuth } from "./auth/context/AuthContext"

export const AppHero = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && <Navbar/>}
      <div className={isAuthenticated ? "container" : ""}>
        <APProuter />
      </div>
    </>
  )
}
