import React from 'react'
import './Header.css'
import amazon_logo from './amazon_logo.jpg';
import Flag from './India_flag.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header"> 
            <Link to="/">
            <img 
                className="header_logo" 
                src={amazon_logo} 
                alt="Amazon Logo"
            />
            </Link>
            
            <div className="header_search">
                <input className="header_searchInput" type="text"/> 
                <SearchIcon className="header_searchIcon" />
            </div>
            
            <div className="header_nav">

                <div className="header_option">
                    <span className="header_optionLineOne">
                        <img className="header_flagLogo" src={Flag} alt="Indian Flag"/>
                    </span>        
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">
                        Hello, Sign in
                    </span>
                    <span className="header_optionLineTwo">
                        Account and Lists
                    </span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        and Orders
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingCartIcon />
                        <span className="header_optionLineTwo  ">
                            0
                        </span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
};


export default Header
