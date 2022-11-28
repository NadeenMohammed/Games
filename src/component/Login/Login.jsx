import React from 'react';
import { Link } from 'react-router-dom';
import "../Login/Login.modules.scss"
import loginImg from "../image/login.jpeg"
import logo from "../image/logo.png"

const Login = () => {
    return <>
        <section className='loginPage shadow-lg'>
            <div className="container ">
                <div className="row ">
                    <div className=" col-md-6">
                        <img src={loginImg} alt="" className='w-100' />
                    </div>
                    <div className="col-md-6  ">

                        <div className="img-logo m-2">
                            <img src={logo} alt="" className='w-50' />
                        </div>
                        <h4 className='text-white'>Log in to GameOver</h4>
                        <form className='form-group m-2'>
                            <label for="exampleFormControlInput1" className="form-label"></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Mail" />

                            <label for="exampleFormControlInput1" className="form-label"></label>
                            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Password" />


                            <div className="btn-block">
                                <button type="submit" className="login-btn btn-outline-info btn   my-3 w-100 ">Login</button>
                            </div>

                            <div className="register my-2">
                                <Link>Forgot Password?</Link>
                                <p className='text-white'>Not a member yet? <Link>Create Account</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>


    </>;
}

export default Login;