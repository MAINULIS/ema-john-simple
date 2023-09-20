import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleSignIn = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                event.target.reset();
                setSuccess('User has been successfully logged in');
                setError('');
                navigate(from, {replace:true})
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="password" required />
                    <p onClick={()=>setShow(!show)}> <small>
                        {
                         show ? <span>Hide password</span>: <span>Show password</span>
                        }
                    </small>
                    </p>
                </div>
                <span className='text-error'>{error}</span>
                <span className='text-success'>{success}</span>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-Jhon? <Link to="/signUp">Create New Account</Link></small></p>
        </div>
    );
};

export default Login;