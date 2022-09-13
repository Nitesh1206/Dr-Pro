import React from 'react';
import {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
// import {alert} from 'react-alert';
export default function Signup(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone_no,setPhone_no] = useState('');
    const [password,setPassword] = useState('');
    const [dob,setDob] = useState('');
    const [gender,setGender] = useState('');
     const history = useHistory('');

    // function signupDetail(e){
    //     e.preventDefault(e)
    //     let data = {name:name,email:email,phone_no:phone_no,password:password,dob:dob,gender:gender}
    //     fetch('https://callmydoc.herokuapp.com/api/patient',{
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }).then((result) => {
    //         result.json().then((resp) => {
    //             console.warn("result", resp);
    //             if (resp.msg === "Registration Successfully") {
    //                 alert.show(resp.msg,{type: 'success'})
    //              }
    //              localStorage.setItem('user-info', JSON.stringify(resp))
    //              history.push("/login")
    //         });
    //     })
    // }
    async function signupDetail(e) {
        e.preventDefault();
        let item = { name: name, email: email, password: password, phone_no: phone_no, dob: dob, gender: gender };
        let result = await fetch("https://callmy-doctor.herokuapp.com/api/patient", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        });
        let result2 = await result.json();
        if (result2.msg === "Registration Successfully") {
            alert(result2.msg,{type: 'success'})
        }
        console.log("result2",result2);
        localStorage.setItem('user-info', JSON.stringify(result2));
        history.push("/login")
    }
    return(
        <div>
            <div className='container signup'>
                <div className='row justify-content-center'>
                    <div className=" col-8 intro_col">
                        <div className="intro_form_container">
                            <div className="intro_form_title">Signup</div>
                            <form  className="intro_form" id="intro_form">
                                <div className="d-flex flex-row align-items-start justify-content-between flex-wrap">
                                    <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} className="intro_input" placeholder="Your Name" required="required" />
                                    <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="intro_input" placeholder="Your E-mail" required="required" />
                                    <input type="tel" value={phone_no} onChange={(e) => {setPhone_no(e.target.value)}} className="intro_input" placeholder="Your Phone" required="required" />
                                    <input type="password" value={password} onChange={(e) =>{setPassword(e.target.value)}} className="intro_input" placeholder="Your Passwprd" required="required" />
                                    <input type="date" value={dob} onChange={(e) => {setDob(e.target.value)}} className="intro_input" placeholder="Your DOB" required="required" />
                                   
                                    <div onChange={(e) => setGender(e.target.value)} className="gen">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" value="Male" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" value="Female" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                                        </div>
                                    </div>                       
                                 </div>
                                <button className="button button_1 intro_button trans_200" onClick={signupDetail}>Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}