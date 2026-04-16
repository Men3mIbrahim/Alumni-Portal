import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import React from 'react'
export default function Otp() {
    
    const location = useLocation();
    let navigate = useNavigate();
    const [code, setCode] = useState('');
    
    let email = location.state?.email;
    
    function submitForm(e){
        e.preventDefault();
        if(code.length !== 6){
        alert('Enter Valid Code');
        return;
        }

        console.log("OTP:", code);

        navigate("/createNewPassword", { state: { email } });
    }

    return <>

    <h2 className=" text-center mt-5 pt-5">Enter OTP</h2>
    <p className=" text-center mt-4 h4 w-50 mx-auto">Email: {email}</p>
    <form onSubmit={submitForm}  className=" w-100 d-flex justify-content-center flex-column">
    <input type="text"
    className="form-control mt-5 w-25 mx-auto "
    maxLength={6}
    placeholder="Enter 6-digit code"
    value={code} 
    onChange={(e) => setCode(e.target.value)}/>

    <button className="btn btn-success w-25 mt-4 mx-auto" type="submit">Verify</button>
    </form>
    </>
}


