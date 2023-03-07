import React from 'react';
import { useState, useeffect, useref } from "react";
import { Link, useNavigate } from 'react-router-dom'
import '../styles/signup.css';
import Nav from "./Nav";
import sunflower from '../img/sunflowerHome.png'
import Footer from "./footer";
import axios from 'axios'
import cookies from 'js-cookie'



export default function Signup() {
    const [emailError, setEmailError] = useState('');
    const [passswordError, setPassswordError] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const navigate = useNavigate()
    const handlechangeemail = (e) => {
        setemail(e.target.value);
    }

    const handlechangepw = (e) => {
        return setpassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        const data = {
            email: email,
            password: password
        }

        const datum = JSON.stringify(data)
        // console.log(datum)

        axios.post('http://localhost:3005/signup', datum, {
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
            
            if(res.status == 201){
                navigate('/bouquet')
            }
            console.log(token)
        }).catch((err) => {
            console.log('here is the error:', err.response.data.errors.email);
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

    // const token = Cookies.get('token');

    // axios.get('/api/data', {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // })
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });


    return (
        <div className="container signupContainer">
            <div className='signupContainerSmall'>
                <div>< Nav /></div>
                <div className="signupDiv">
                    <div className="signupDiv1">
                        <div className="signupDiv1Inner">
                            <form className='formDiv'>
                                <img alt="sunflower" className="sunflower sunflowerForm" src={sunflower} />
                                {/* <input required='required' type='text' onChange={handlechangefn} placeholder='first name'></input>
                                <input required='required' type='text' onChange={handlechangeln} placeholder='last name'></input> */}
                                <input required='required' type='email' onChange={handlechangeemail} placeholder='email'></input>
                                <div className="emailerror">{emailError}</div>
                                <input required='required' minLength='7' maxLength='20' type='password' onChange={handlechangepw} placeholder='password'></input>
                                <div className="passworderror">{passswordError}</div>
                                <input required='required' type='submit' onClick={handleSubmit}></input>

                                <div className='signupButLogin'>
                                    <p>Have an account?</p>
                                    <Link to='/login' className='linkup'>
                                        <p className='linkuplogin'>LOG IN</p>
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