import React, { useState, useEffect, createContext } from 'react';

export const ContextDoctor = createContext();

export const DoctorContext = (props) => {

    const [doctor,setDoctor] = useState('');

    useEffect(() =>{
        fetch('https://callmydoc.herokuapp.com/api/doctors/').then((result) => result.json().then((resp) =>{
            setDoctor(resp);
        }))
    }, [])
    
    return(
        <ContextDoctor.Provider value={[doctor, setDoctor]}>
            {props.children}
        </ ContextDoctor.Provider>
    )
}
