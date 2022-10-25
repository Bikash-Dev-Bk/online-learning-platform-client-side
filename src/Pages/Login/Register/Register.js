import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Register = () => {
    const {createUser, signInWithGoogle, signInWithGithub} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
        .then( result =>{
            const user = result.user;
            console.log(user);
        })
        .catch( error => console.error(error));
    }
    
    const handleSignInWithGoogle = () =>{
        signInWithGoogle()
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const handleSignInWithGithub = () =>{
        signInWithGithub()
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo-url' placeholder="photo url" className="input input-bordered" required/>
                            </div>
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
                                    <Link to='/login' className="label-text-alt link link-hover">Already Have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
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

export default Register;