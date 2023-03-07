import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav2'
import cookies from 'js-cookie'
import plant1 from '../img/plants/plant1.jpg'
import plant2 from '../img/plants/plant2.jpg'
import plant3 from '../img/plants/plant3.jpg'
import plant4 from '../img/plants/plant4.jpg'
import plant5 from '../img/plants/plant5.jpg'
import plant6 from '../img/plants/plant6.jpg'
import plant7 from '../img/plants/plant7.jpg'
import plant8 from '../img/plants/plant8.jpg'
import plant9 from '../img/plants/plant9.jpg'
import plant10 from '../img/plants/plant10.jpg'
import Footer from './footer';



export default function Plant() {
    const navigate = useNavigate();

    const [isLogged, setIsLogged] = useState(false);

    const [marginLeft, setMarginLeft] = useState('')

    const myelement = useRef(null);

    const location = useLocation();

    useEffect(() => {

        const handleAuth = async () => {
            const currentLocation = location.pathname;
            const token = cookies.get('PersonUser');
            console.log(token);
    
            axios.get('http://localhost:3005/getauth', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
    
                // console.log(res)
                if (res.status == 200) {
                    navigate(`${currentLocation}`);
                    setIsLogged(true);
    
    
                } else {
                    navigate('/login')
                }
    
            }).catch((err) => {
                console.log(err);
                navigate('/login')
            })
        }

        handleAuth();

    }, [])



    return(
        <div className='containerBouquet'>
        <div className='containerSmall'>
            <div>< Nav /></div>
            <div className='bodyDiv'>
                <p>Explore our Plant collections</p>
                <div className='bodyDivCollections'>
                    <div className='bodyDivCollections1'>
                        <div className='bouquetDiv'>
                            <img alt='bouquet1' className='bouquet1' src={plant1} />
                        </div>

                        <div className='bodyDivCollections2'>
                            <p>$5.00</p>
                            <p>
                                <span class="material-symbols-outlined symbol">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined symbol">
                                    add_shopping_cart
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='bodyDivCollections1'>
                        <div className='bouquetDiv'>
                            <img alt='bouquet1' className='bouquet1' src={plant2} />
                        </div>
                        <div className='bodyDivCollections2'>
                            <p>$5.00</p>
                            <p>
                                <span class="material-symbols-outlined symbol">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined symbol">
                                    add_shopping_cart
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='bodyDivCollections1'>
                        <div className='bouquetDiv'>
                            <img alt='bouquet1' className='bouquet1' src={plant3} />
                        </div>
                        <div className='bodyDivCollections2'>
                            <p>$5.00</p>
                            <p>
                                <span class="material-symbols-outlined symbol">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined symbol">
                                    add_shopping_cart
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='bodyDivCollections1'>
                        <div className='bouquetDiv'>
                            <img alt='bouquet1' className='bouquet1' src={plant4} />
                        </div>
                        <div className='bodyDivCollections2'>
                            <p>$5.00</p>
                            <p>
                                <span class="material-symbols-outlined symbol">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined symbol">
                                    add_shopping_cart
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='bodyDivCollections1'>
                        <div className='bouquetDiv'>
                            <img alt='bouquet1' className='bouquet1' src={plant5} />
                        </div>

                        <div className='bodyDivCollections2'>
                            <p>$5.00</p>
                            <p>
                                <span class="material-symbols-outlined symbol">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined symbol">
                                    add_shopping_cart
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='bodyDivCollections1'>
                        <div className='bouquetDiv'>
                            <img alt='bouquet1' className='bouquet1' src={plant6} />
                        </div>

                        <div className='bodyDivCollections2'>
                            <p>$5.00</p>
                            <p>
                                <span class="material-symbols-outlined symbol">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined symbol">
                                    add_shopping_cart
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='bodyDivCollections1'>
                        <div className='bouquetDiv'>
                            <img alt='bouquet1' className='bouquet1' src={plant7} />
                        </div>

                        <div className='bodyDivCollections2'>
                            <p>$5.00</p>
                            <p>
                                <span class="material-symbols-outlined symbol">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined symbol">
                                    add_shopping_cart
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='bodyDivCollections1'>
                        <div className='bouquetDiv'>
                            <img alt='bouquet1' className='bouquet1' src={plant8} />
                        </div>

                        <div className='bodyDivCollections2'>
                            <p>$5.00</p>
                            <p>
                                <span class="material-symbols-outlined symbol">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined symbol">
                                    add_shopping_cart
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='bodyDivCollections1'>
                        <div className='bouquetDiv'>
                            <img alt='bouquet1' className='bouquet1' src={plant9} />
                        </div>

                        <div className='bodyDivCollections2'>
                            <p>$5.00</p>
                            <p>
                                <span class="material-symbols-outlined symbol">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined symbol">
                                    add_shopping_cart
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='bodyDivCollections1'>
                        <div className='bouquetDiv'>
                            <img alt='bouquet1' className='bouquet1' src={plant10} />
                        </div>

                        <div className='bodyDivCollections2'>
                            <p>$5.00</p>
                            <p>
                                <span class="material-symbols-outlined symbol">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined symbol">
                                    add_shopping_cart
                                </span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className='footer'>
            < Footer/>
        </div>
    </div>
    )
}