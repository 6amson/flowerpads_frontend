import React from 'react';
import { useState, useEffect, useRef } from 'react';

import { useMediaQuery } from 'react-responsive';
import '../styles/bouquet.css';
import Nav from './Nav2';
import bouquet1 from '../img/bouquet/bouquet1.jpg'
import bouquet2 from '../img/bouquet/bouquet2.jpg'
import bouquet3 from '../img/bouquet/bouquet3.jpg'
import bouquet4 from '../img/bouquet/bouquet4.jpg'
import bouquet5 from '../img/bouquet/bouquet5.jpg'
import bouquet6 from '../img/bouquet/bouquet6.jpg'
import bouquet7 from '../img/bouquet/bouquet7.jpg'
import bouquet8 from '../img/bouquet/bouquet8.jpg'
import bouquet9 from '../img/bouquet/bouquet9.jpg'
import bouquet10 from '../img/bouquet/bouquet10.jpg'
import Footer from './footer';
import { useLocation } from 'react-router-dom';




export default function Bouquet() {
    const styles = {
        fontWeight: 'bolder'
    }

    const [marginLeft, setMarginLeft] = useState('')

    const myelement = useRef(null);

    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/bouquet' || location.pathname === '/vase' || location.pathname === '/plant'){
            console.log(location.pathname)
            

        }
    }, [])
  
    return (
        <div className='containerBouquetDiv'>
            <div className='containerSmall'>
                <div >< Nav /></div>
                <div className='bodyDiv'>
                    <p>Explore our bouquet collections</p>
                    <div className='bodyDivCollections'>
                        <div className='bodyDivCollections1'>
                            <div className='bouquetDiv'>
                                <img alt='bouquet1' className='bouquet1' src={bouquet1} />
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
                                <img alt='bouquet1' className='bouquet1' src={bouquet2} />
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
                                <img alt='bouquet1' className='bouquet1' src={bouquet3} />
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
                                <img alt='bouquet1' className='bouquet1' src={bouquet4} />
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
                                <img alt='bouquet1' className='bouquet1' src={bouquet5} />
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
                                <img alt='bouquet1' className='bouquet1' src={bouquet6} />
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
                                <img alt='bouquet1' className='bouquet1' src={bouquet7} />
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
                                <img alt='bouquet1' className='bouquet1' src={bouquet8} />
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
                                <img alt='bouquet1' className='bouquet1' src={bouquet9} />
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
                                <img alt='bouquet1' className='bouquet1' src={bouquet10} />
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