import React from 'react';
import { useState } from 'react';
import '../styles/nav.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';




export default function Nav() {
    const navigate = useNavigate();

    const [isLogged, setIsLogged] = useState(false);
    //    let isLogged;
    const [dataLink, setDataLink] = useState('')

    const handleAuth = async (e) => {
        const token = cookies.get('PersonUser');
        console.log(token);

        // setDataLink(e.target.getAttribute('data-src'));
        const data = e.target.getAttribute('data-src');
        // console.log(e.target.getAttribute('data-src'));

        axios.get('http://localhost:3005/getauth', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {

            // console.log(res)
            if (res.status == 200) {
                navigate(`/${data}`);
                setIsLogged(true);


            } else {
                navigate('/login')
            }

        }).catch((err) => {
            console.log(err);
            navigate('/login')
        })
    }


    const logOut = () => {
        const token = cookies.get('PersonUser');
        if (token) {
            cookies.remove('PersonUser');
            console.log('cookie removed');
            navigate('/');
        } else {
            return
        }
    }


    return (

        <nav className='navigation'>
            <div>
                <Link to='/' className='linkup'>
                    <p className='navigationParagraph'>Flowerpads</p>
                </Link>
            </div>
            <div>
                <ul className='navigationUnordered'>
                    <Link className='linkup'>
                        <li data-src="bouquet" onClick={handleAuth}>Bouquets</li>
                    </Link>


                    <Link className='linkup'>
                        <li data-src="vase" onClick={handleAuth}>Vases</li>
                    </Link>


                    <Link className='linkup'>
                        <li data-src="plant" onClick={handleAuth}>Plant</li>
                    </Link>
                </ul>
            </div>

            <div>
                {
                    isLogged ? (
                        <div className='navigationIn'>
                            <div><span class="material-symbols-rounded navlogos">
                                person
                            </span></div>
                            <div>
                                <span class="material-symbols-rounded navMenu">
                                    menu
                                </span>
                            </div>

                            <div><span class="material-symbols-rounded navlogos">
                                favorite
                            </span></div>
                            <div>
                                <span class="material-symbols-rounded navlogos">
                                    shopping_cart
                                </span>
                            </div>
                        </div>

                    ) : (
                        <p className='logout' onClick={logOut}>Logout</p>
                    )
                }
            </div>

        </nav>
    )
}
