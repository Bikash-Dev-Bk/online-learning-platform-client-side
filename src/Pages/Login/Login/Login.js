import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const {signIn, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [success, setSuccess] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        setPasswordError("");

        signIn(email, password)
        .then( result => {
            const user = result.user;
            setSuccess(true);
            form.reset();
            navigate(from, {replace: true});
            
        })
        .catch( error => {
            console.error(error)
            setPasswordError(error.message);
        })
    }

    const handleSignInWithGoogle = () =>{
        signInWithGoogle()
        .then( result => {
            const user = result.user;
            navigate(from, {replace: true});
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const handleSignInWithGithub = () =>{
        signInWithGithub()
        .then( result => {
            const user = result.user;
            navigate(from, {replace: true});
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">New in this website? Register</Link>
                                </label>
                            </div>

                            {success && <p className='text-green-500'>Successfully login to the account</p>}

                            {passwordError && <p className='text-red-500'>Wrong password or email</p>}

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Log in</button>
                            </div>
                        </form>
                        <button onClick={handleSignInWithGoogle} className="btn btn-outline btn-success mb-6 mx-8">Google Log In</button>
                        <button onClick={handleSignInWithGithub} className="btn btn-outline btn-success mb-6 mx-8">Github Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;