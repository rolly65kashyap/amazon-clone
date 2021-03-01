import React from 'react'
import './Home.css';
import Product from './Product.js';

function Home() {
    return (
        <div className="Home">
            <div className="home__container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Prime Banner"/>
            </div>

            <div className="home__row">
                <Product 
                    id="12578999"
                    title='The Lean Startup' 
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    rating={3}
                />
                <Product 
                    id="12578987"
                    title='Kenwood Mix Stand Mixer' 
                    price={239.9} 
                    image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
                    rating={4}
                />
            </div>
        
            <div className="home__row">
                <Product 
                    id="568965653"
                    title="Samsung LC4797RTFGH653UJ 49' Curved LED Gaming Monitor" 
                    price={179.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 
                    rating={3}
                />
                <Product 
                    id="12765469"
                    title='Amazon Echo (3rd Generation) | Smart Spaker with Alexa, Charcoal Fabric' 
                    price={97.99} 
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf7$300x400_retinamobilex25" 
                    rating={5}
                />
                
            </div>

            <div className="home__row">
            <Product 
                    id="12565469"
                    title="Samsung LC4864ETVN57TEH8 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" 
                    price={1094.78}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    rating={4}
                />
            </div>
        </div>
    )
}

export default Home
