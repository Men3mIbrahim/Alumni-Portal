import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';


export default function Register() {
    
    let navigate = useNavigate();
    const location = useLocation();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const email = location.state?.email;

    
    
    function submitForm(e) {
        e.preventDefault();

        if (!password || !confirmPassword) {
        alert("Fill all fields");
        return;
    }

        if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }   

        console.log("Password updated for:", email);
        navigate('/passwordChanged');

}

    return <>
    <form onSubmit={submitForm} className=' w-100 mx-auto  m-5 p-3' action="">
    <div className='left-side bg-dark-subtle w-50 mx-auto pb-5 pt-5'>
    <h3 className=' text-center m-5 '>Create New Password</h3>
    <div className='  w-100 mx-auto  d-flex flex-column align-items-center' >
    <input className='form-control mb-4 w-50 mx-auto'
    type="password"
    placeholder='Password'
    value={password}
    onChange={(e) => setPassword(e.target.value)}/> 

    <input className='form-control mb-4 w-50 mx-auto'
    type="password"
    placeholder='Confirm Password'
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}/> 

    <button className='btn btn-primary w-50 mx-auto'>
    RESET PASSWORD
    </button>
    </div>
    </div>

    </form>

    </>
}

