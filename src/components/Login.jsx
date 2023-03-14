import React from 'react';
import { useState, useeffect, useref } from "react";
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css';
import Nav from "./Nav";
import sunflower from '../img/sunflowerHome.png'
import Footer from "./footer";
import cookies from 'js-cookie'
import axios from 'axios'

export default function Login() {;
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passswordError, setPassswordError] = useState('');

    const navigate = useNavigate();

    const handlechangeemail = (e) => {
        setemail(e.target.value);
    }

    const handlechangepw = (e) => {
        setpassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        const data = {
            email: email,
            password: password
        }

        const datum = JSON.stringify(data)
        // console.log(datum)


        //call to the server to check loggedin users
        axios.post('https://flowerpadsbackend.netlify.app/.netlify/functions/index/login', datum, {
            // withCredentials: true,
            // crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
            }

        }).then((res) => {
            // const token = res.headers['set-cookie'];
            console.log(res);
            const token = res.data;
            cookies.set('PersonUser', token, { secure: true, expires: 1});
            
            if(res.status == 200){
                navigate('/bouquet')
            }
            console.log(token)
        }).catch((err) => {
            console.log(err);
            
           // checking for errors due to validation
            if (err.response.data.errors.email !== '' || err.response.data.errors.password !== ''){
                
                setEmailError(err.response.data.errors.email);
                setPassswordError(err.response.data.errors.password)
            }
           setTimeout(() => {
            setEmailError('');
            setPassswordError('')
           }, 3500);
        })


    }

    return (
        <div className="container signupContainer">
            <div className='signupContainerSmall'>
                <div>< Nav /></div>
                <div className="signupDiv">
                    <div className="signupDiv1">
                        <div className="signupDiv1Inner">
                        <h3 className='registerDiv'>Login into your account. </h3>
                            <form className='formDiv1'>
                            <img alt="sunflower" className="sunflower sunflowerForm" src={sunflower} />
                                <input required='required' type='email' onChange={handlechangeemail} placeholder='email'></input>
                                <div className="emailerror">{emailError}</div>
                                <input required='required' minLength='7' maxLength='20' type='password' onChange={handlechangepw} placeholder='password'></input>
                                <div className="passworderror">{passswordError}</div>
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
        </div>
    )
}