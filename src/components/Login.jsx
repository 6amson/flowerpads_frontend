import React from 'react';
import { useState, useeffect, useref } from "react";
import { Link } from 'react-router-dom'
import '../styles/login.css';
import Nav from "./Nav";
import sunflower from '../img/sunflowerHome.png'
import Footer from "./footer";

export default function Login() {;
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handlechangeemail = (e) => {
        setemail(e.target.value);
    }

    const handlechangepw = (e) => {
        setpassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);

    }

    return (
        <div className="container signupContainer">
            <div className='signupContainerSmall'>
                <div>< Nav /></div>
                <div className="signupDiv">
                    <div className="signupDiv1">
                        <div className="signupDiv1Inner">
                            <form className='formDiv1'>
                            <img alt="sunflower" className="sunflower sunflowerForm" src={sunflower} />
                                <input required='required' type='email' onChange={handlechangeemail} placeholder='email'></input>
                                <div className="emailerror">right now</div>
                                <input required='required' minLength='7' maxLength='20' type='password' onChange={handlechangepw} placeholder='password'></input>
                                <div className="passworderror">right now</div>
                                <input required='required' onClick={handleSubmit} type='submit'></input>

                                <div className='signupButLogin'>
                                <p>No account?</p>
                                <Link to='/signup' className='linkup'>
                                    <p className='linkuplogin'>SIGN UP</p>
                                </Link>
                            </div>
                            </form>
                            
                           
                        </div>
                    </div>

                    <div className="signupDiv2">
                        <img alt="sunflower" className="sunflower" src={sunflower} />
                    </div>
                </div>
            </div>

            <div className='footer'>
                < Footer/>
            </div>
        </div>
    )
}