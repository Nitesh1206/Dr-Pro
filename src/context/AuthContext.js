
import React,{createContext, useState} from "react";

export const ContextAuth = createContext();

export const AuthContext = (props) =>{

    const [login,setLogin] = useState(localStorage.getItem('user-info'))
   

    return(
        <>
        <ContextAuth.Provider value={[login, setLogin]}>
            {props.children}
        </ContextAuth.Provider>
        </>
    )
}