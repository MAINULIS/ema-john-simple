import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const [error, setError] = useState('');
    const[success, setSuccess] = useState('');

    const handleSignUp =event =>{
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        createUser(email, password)
        .then(result =>{
            const newUser = result.user;
            console.log(newUser)
            event.target.reset();
            setSuccess("User has been successfully sign up");
            setError("");
        })
        .catch(error =>{
            setError(error.message);
        })
        
        if( password !== confirm){
            setError('Your password did not match.please try again');
            return;
        }
       else if(password.length <6){
            setError('Password should be at least 6 characters');
            return;
        }
        
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Sign Up</h3>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="confirm-password" required />
                </div>
                <span className='text-error'>{error}</span>
                 <span className='text-success'>{success}</span>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
                <span><small>Already have an account? <Link to="/login">Login</Link></small></span>
            
        </div>
    );
};

export default SignUp;