import React from 'react'
import './Header.css'
// import amazon_logo from './amazon_logo.png';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            {/* <img className="header_logo" src={amazon_logo} alt="Amazon Logo"/> */}
            <div className="header_search">
                <input className="header_searchInput" type="text"/> 
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Flag
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
            </div>
        </div>
    )
}

export default Header
