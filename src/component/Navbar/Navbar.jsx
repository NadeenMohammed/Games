import React from 'react';
import "./Navbar.modules.scss"
import {Link, useNavigate} from 'react-router-dom';
import logo from "../image/logo.png"
import data from '../../data/data';
import { param } from 'jquery';
// import Pc from '../Pc/Pc';

const Navbar = () => {
    const navigate= useNavigate()
    const redile =(parames)=>{
        navigate(`/platform/${parames}`)
    }
    return <>
        <nav className="navbar navbar-expand-lg  fixed-top ">
            <div className="container">
                <Link className="navbar-brand text-white" to="">
                    <img src={logo} alt="" className='w-50' />
                    Game Over
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {data.platform.map((x, index)=>(<button onClick={()=>{redile(x.value)}} key={index}  >{x.name} </button>
                    ))}
                </div>
                <div className="btnn btn  me-2 " type="submit">
                    <Link to="login" className='px-3 lin1'>Login</Link>
                    <Link to="Register" className='mx-4 lin2'>Join Free</Link>
                </div>
            </div>
        </nav>


    </>;
}


export default Navbar;