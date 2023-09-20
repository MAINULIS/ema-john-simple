import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventor</Link>

                {
                    user ? <span className='userInfo'>  {user.email} <button onClick={handleLogOut}>Sign Out</button></span> :
                   <Link to="/login">Login</Link>
                }

                <Link to="/signUp">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;