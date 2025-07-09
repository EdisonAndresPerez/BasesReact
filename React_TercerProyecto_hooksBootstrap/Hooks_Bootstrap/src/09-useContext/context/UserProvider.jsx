import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {
      const user = { id: 1,
         name: "UsuarioPrueba",
         email: "usuarioprueba@gmail.com",};
  return (
    
    
    <UserContext.Provider value={{user:user}}>
        {children}
    </UserContext.Provider>

  )
}
