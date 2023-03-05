import React from 'react';
import '../styles/footer.css'



export default function Footer() {
    return (

        <footer>

            <div className='footerDiv'>
                <div className="item">
                    <h3>Services</h3>
                    <ul>
                        <li>Web design</li>
                        <li>Development</li>
                        <li>Hosting</li>
                    </ul>
                </div>

                <div className="item">
                    <h3>About</h3>
                    <ul>
                        <li>Company</li>
                        <li>Team</li>
                        <li>Legacy</li>
                    </ul>
                </div>

                <div className="item">
                    <h3>Careers</h3>
                    <ul>
                        <li>Job openings</li>
                        <li>Employee success</li>
                        <li>Benefits</li>
                    </ul>
                </div>

            </div>

            <div class="itemSocial">
                <div className='itemSocialIcon'>
                <i class="icon ion-social-facebook"></i>
                <i class="icon ion-social-twitter"></i>
                <i class="icon ion-social-snapchat"></i>
                <i class="icon ion-social-instagram"></i>
                </div>
                <p class="copyright">Flowerpads ©</p>
            </div>


        </footer>

    )
}