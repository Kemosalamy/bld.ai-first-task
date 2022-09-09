import { createContext, useContext, useState, useTransition } from 'react';
import { BrowserRouter as Router, Route, Switch, Navigate, useNavigate} from "react-router-dom";
import { StateContext } from "./App";
import './style.css';

function Navbar({location}){

    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/?search=' + searchText);
    }

    return (
        <nav className='nav-bar'>
            <div className='padding'>&nbsp;</div>
            <label className='mobile-dropdown'>☰</label>
            <img className='udemy-logo' onClick={() => navigate('/')} alt="Udemy Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/512px-Udemy_logo.svg.png"/>
            <label className='nav-bar-links'>Categories</label>
            <form name='searchForm' onSubmit={handleSearch} className='form-style'>
                <input id="search-bar" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search for anything" className='search-bar' type="text"/>
                <input className='search-button' type="submit" value="Search"/>
            </form>
            <label className='nav-bar-links' >Udemy Business</label>
            <label className='nav-bar-links' >Teach on Udemy</label>
            <img className='shopping-cart' src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3041-thumb.png" />
            <input className='log-in-button' type="button" value="Log In"/>
            <input className='sign-up-button' type="button" value="Sign Up"/>
            <img className='globe-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/2048px-Globe_icon.svg.png"/>
            <div className='padding'>&nbsp;</div>
        </nav>
    )

}


export default Navbar;
