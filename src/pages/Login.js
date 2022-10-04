import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
const history = useHistory('')

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  async function loginDetail(e) {
        e.preventDefault(e)
        let data = { email: email, password: password }
        let result = await fetch('https://callmydoc.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let result2 = await result.json();
        if (result2.msg === "invalid username or password") {
            alert.show(result2.msg, { ERROR: 'error' })
            toast.info('invalid username or password', {
                position: toast.POSITION.TOP_CENTER
            }); 
        }else{
            localStorage.setItem('user-info', JSON.stringify(result2));
            localStorage.setItem('userid',result2._id);
            history.push("/patient")
        }
    }

    return (
        <div>
            <div className='container login'>
                <div className='row justify-content-center'>
                    <div className=" col-8 intro_col">
                        <div className="intro_form_container">
                            <div className="intro_form_title">Login</div>
                            <form className="intro_form" id="intro_form">
                                <div className="d-flex flex-column align-items-center justify-content-between flex-wrap">
                                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="intro_input" placeholder="Your E-mail" required="required" />
                                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="intro_input" placeholder="Your Password" required="required" />
                                </div>
                                <button className="button button_1 intro_button trans_200" onClick={loginDetail}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}