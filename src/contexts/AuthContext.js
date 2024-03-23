import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();


const AuthProvider = ({children, initialloggedinUser}) =>{
    const [loggedinUser, setLoggedinUser] = useState(initialloggedinUser);

    return (
        <AuthContext.Provider value={{loggedinUser, setLoggedinUser}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;
