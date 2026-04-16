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
    <div className="page-bg mt-5 d-flex left-side m-5">
    <div className="w-50 d-flex flex-column justify-content-center align-items-center m-4">
        <h3 className="">Welcome to</h3>
        <h6 className=" mb-3">Student Portal</h6>
        <i className="fa-solid fa-circle-user login-icon "></i>
      </div>


      <form onSubmit={submitLoginForm} className=" register-form  bg-dark-subtle d-flex flex-column">
        <h2 className="text-center mb-4">Login</h2>

        <label className="fw-semibold mb-1 link-password">Email</label>
        <input onChange={getUserData}
          type="email"
          className="form-control mb-4 w-75 mx-auto "
          placeholder="Enter email"
          name='email'
        />

        <label className="fw-semibold mb-1 link-password">Password</label>
        <input onChange={getUserData}
          type="password"
          className="form-control mb-4 w-75 mx-auto"
          placeholder="Enter password"
          name='password'
        />

        {errorList.map((err, index) => (
          <div key={index} className="alert alert-danger py-1">
            {err.message}
          </div>
        ))}

        {error && <div className="alert alert-danger ">{error}</div>}

        
        <Link className='text-decoration-none text-dark text-muted pb-1 link-password' to='/resetPassword'>Forget password?</Link>

        <button className="btn btn-primary w-75 mx-auto py-2 mb-3">Login</button>

        <p className="text-center">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
}
