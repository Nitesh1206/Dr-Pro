import React, { createContext, useState } from "react";

export const ContextPatient = createContext();

export const PatientContext = (props) =>{

const [patient,setPatient] = useState(JSON.parse(localStorage.getItem("user-info")) || {})
const setValue = (value)=>{
    setPatient(value)
    localStorage.setItem('user-info',JSON.stringify(value))
}
    return(
           <ContextPatient.Provider value={[patient,setValue]}>
            {props.children}
            </ ContextPatient.Provider>
    )
}

