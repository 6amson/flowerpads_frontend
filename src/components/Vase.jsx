import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import cookies from 'js-cookie';
import Nav from './Nav2'
import vase1 from '../img/vases/vase1.jpg'
import vase2 from '../img/vases/vase2.jpg'
import vase3 from '../img/vases/vase3.jpg'
import vase4 from '../img/vases/vase4.jpg'
import vase5 from '../img/vases/vase5.jpg'
import vase6 from '../img/vases/vase6.jpg'
import vase7 from '../img/vases/vase7.jpg'
import vase8 from '../img/vases/vase8.jpg'
import vase9 from '../img/vases/vase9.jpg'
import vase10 from '../img/vases/vase10.jpg'
import Footer from './footer';



export default function Vase() {
    const navigate = useNavigate();

   

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
                <p>Explore our vase collections</p>
                <div className='bodyDivCollections'>
                    <div className='bodyDivCollections1'>
                        <div className='bouquetDiv'>
                            <img alt='bouquet1' className='bouquet1' src={vase1} />
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
                            <img alt='bouquet1' className='bouquet1' src={vase2} />
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
                            <img alt='bouquet1' className='bouquet1' src={vase3} />
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
                            <img alt='bouquet1' className='bouquet1' src={vase4} />
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
                            <img alt='bouquet1' className='bouquet1' src={vase5} />
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
                            <img alt='bouquet1' className='bouquet1' src={vase6} />
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
                            <img alt='bouquet1' className='bouquet1' src={vase7} />
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
                            <img alt='bouquet1' className='bouquet1' src={vase8} />
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
                            <img alt='bouquet1' className='bouquet1' src={vase9} />
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
                            <img alt='bouquet1' className='bouquet1' src={vase10} />
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