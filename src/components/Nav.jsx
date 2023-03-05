import React from 'react';
import '../styles/nav.css';
import { Link, useLocation } from 'react-router-dom';



export default function Nav() {

    const styles = {
        fontWeight: 'bolder'
    }

    const location = useLocation()

    const isLogged = true;

    // useEffect(() => {
    //     if(location.pathname === '/bouquet' || location.pathname === '/vase' || location.pathname === '/plant'){
    //         console.log(location.pathname)


    //     }
    // }, [])


    return (
        <nav className='navigation'>
            <div>
                <Link to='/' className='linkup'>
                    <p className='navigationParagraph'>Flowerpads</p>
                </Link>
            </div>
            <div>
                <ul className='navigationUnordered'>
                    {
                        isLogged ? (
                            <Link to='/bouquet' className='linkup'>
                                <li>Bouquets</li>
                            </Link>
                        ) : (
                            <Link to='/signup' className='linkup'>
                                <li>Bouquets</li>
                            </Link>
                        )
                    }

                    <Link to='/vase' className='linkup'>
                        <li>Vases</li>
                    </Link>

                    <Link to='/plant' className='linkup'>
                        <li>Plants</li>
                    </Link>
                </ul>
            </div>
            <div className='navigationIn'>
                <div><span class="material-symbols-rounded navlogos">
                    person
                </span></div>
                <span class="material-symbols-rounded navMenu">
                    menu
                </span>
                <div><span class="material-symbols-rounded navlogos">
                    favorite
                </span></div>
                <div>
                    <span class="material-symbols-rounded navlogos">
                        shopping_cart
                    </span>
                </div>
            </div>
        </nav>
    )
}