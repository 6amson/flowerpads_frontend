import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import '../styles/home.css';
import Nav from './Nav'
import markus from '../img/markus.png'
import everbloom from '../img/everbloom.png'





export default function Home() {

    const navigate = useNavigate();
    const [opacity, setOpacity] = useState('1');
    const [mopacity, setMopacity] = useState('1');

    const isSmallScreen = useMediaQuery({ query: '(max-width: 1300px)' });

    const myelement = useRef(null);
    const myelement1 = useRef(null);

    const handleshop = () => {
        navigate('/signup')
    }

    useEffect(() => {
        const myElement = myelement.current;
        const myElement1 = myelement1.current;
        if (myElement1 && !isSmallScreen) {
            // myElement.style.top = top;
            // myElement.style.opacity = opacity;
            myElement1.style.opacity = opacity;

        } else if (myElement1 && isSmallScreen) {
            // myElement.style.top = top1;
            // myElement.style.opacity = opacity;
            myElement1.style.opacity = mopacity;
        }

    }, [isSmallScreen]);

    return (
        <div className='container'>
            <div className='conatainerSmall'>
                <div className='strayDiv'></div>
                <div>< Nav /></div>
                <div className='bodyDiv'>
                    <div className='bodyDivParagraph'>
                        <p>Let's help you<span><img className='markus' alt='anemone' src={markus} /></span> <span>curate</span> a bouquet.</p>
                        <p>A wide selection of flowers for every occasion</p>
                        <div className='explorePage'>
                            <div className='explorePage1' onClick={handleshop}><p>Shop</p><span className="material-symbols-rounded shoppingBag">
                                shopping_bag
                            </span></div>
                            <div className='explorePage2' onClick={handleshop}><p>Learn More</p></div>
                        </div>
                    </div>
                    <div className='bodyDivImage'>
                        {/* <img ref={myelement} className='anemone' alt='anemone' src={anemone}/> */}
                        <div className='bouquetDiv'>
                            {/* <img className='larisa' alt='anemone' src={sunflower}/> */}
                            <img ref={myelement1} className='everbloom' alt='everbloom' src={everbloom} />
                            {/* <img className='markus' alt='anemone' src={markus}/> */}

                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='footer'>
                < Footer/>
            </div> */}
        </div>

    )
}