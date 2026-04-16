import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'



export default function Register() {

    const [email, setEmail] = useState('')
    let navigate = useNavigate();

    function submitForm(e) {
        e.preventDefault();
        if (!email.includes("@")) {
        alert("Enter your email");
        return;
}
        console.log("Email sent");
        console.log(email)
        navigate('/otp', { state: { email } });
        
    }
    
    

    return <>
        <form onSubmit={submitForm} className='w-100 mx-auto m-5 p-3'>

            <div className='left-side bg-dark-subtle w-50 mx-auto pb-5 pt-5'>

                <h3 className='text-center m-5'>Reset Password</h3>

                <div className='w-100 mx-auto d-flex flex-column align-items-center' >

                    <input
                        className='form-control mb-4 w-50 mx-auto'
                        type="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />

                    <button className='btn btn-primary w-50 mb-4'>
                        SEND CODE
                    </button>

                    <div className='d-flex'>
                        <p className='text-muted mx-1'>Remember Password ?</p>
                        <Link className='text-dark' to='/login'>Login In Here</Link>
                    </div>

                </div>
            </div>

        </form>

    </>
}

