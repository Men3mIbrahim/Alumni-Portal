import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";







export default function Login() {


  const [error, setError] = useState("")
  const [errorList, setErrorList] = useState([])
  let navigate = useNavigate()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  function validateLoginForm() {
    let scheme = Joi.object({
      email: Joi.string().email({ tlds: { allow: ["com", "net"] } }).required(),
      password: Joi.string().min(4).required()
    })
    return scheme.validate(user, { abortEarly: false })
  }


async function sendUserDataToApi() {
  try {
    const { data } = await axios.get(`http://localhost:3001/users?email=${user.email}&password=${user.password}`);
    
    if (data.length > 0) {
      localStorage.setItem("userToken", "true");
      localStorage.setItem("user", JSON.stringify(data[0]));
      navigate('/');
    } else {
      setError("Email or password is incorrect");
    }
  } catch (err) {
    setError(err.message || "Error occurred");
  }
}


  function submitLoginForm(e) {
    e.preventDefault()
    setErrorList([]);
    setError("");
    
    let validation = validateLoginForm();
    if (validation.error) {
      setErrorList(validation.error.details);
    } else {
      sendUserDataToApi();
    }
  }
  return (
    <div className="login-page d-flex align-items-center justify-content-center mt-5">
      <form onSubmit={submitLoginForm} className="login-form p-4">
        <h2 className="text-center mb-4">Login</h2>

        <label className="fw-semibold mb-1">Email</label>
        <input onChange={getUserData}
          type="email"
          className="form-control mb-4"
          placeholder="Enter email"
          name='email'
        />

        <label className="fw-semibold mb-1">Password</label>
        <input onChange={getUserData}
          type="password"
          className="form-control mb-4"
          placeholder="Enter password"
          name='password'
        />

        {errorList.map((err, index) => (
          <div key={index} className="alert alert-danger py-1">
            {err.message}
          </div>
        ))}

        {error && <div className="alert alert-danger">{error}</div>}

        
        <a href="#" onClick={(e)=> e.preventDefault()} className='text-decoration-none text-dark text-muted pb-1'>Forget password?</a>

        <button className="btn btn-primary w-100 py-2 mb-3">Login</button>

        <p className="text-center">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
}
