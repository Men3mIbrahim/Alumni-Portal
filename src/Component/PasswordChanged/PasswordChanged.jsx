import React from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
    return <>
    <form className='' action="">
    <i className='fa-solid fa-circle-check w-100 text-success ' style={{fontSize:'150px',marginTop:'120px',marginBottom:'50px'}} ></i>
    <h3 className=' text-center  mb-5 '>Password Changed</h3>

    <div className=' w-25 mx-auto  d-flex flex-column align-items-center' >
    <button className=' btn btn-success w-100 mb-4 '>
    <Link className='text-decoration-none text-white' to="/login">BACK TO Login IN</Link>
    </button>
    </div>

    </form>

    </>
}

