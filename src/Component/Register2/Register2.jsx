import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";







export default function Register() {


    const [error, setError] = useState("")
    const [errorList, setErrorList] = useState([])
    let navigate = useNavigate()

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        nationalID: '',
        email: '',
        password: '',
    })

    function getUserData(e) {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
    }

    function validateRegisterForm() {
        let scheme = Joi.object({
            first_name: Joi.string().min(3).max(10).required(),
            last_name: Joi.string().min(3).max(10).required(),
            nationalID: Joi.string()
                .pattern(/^[0-9]{14}$/).required().messages({
                    "string.pattern.base": "National ID must be exactly 14 digits"
                }),
            email: Joi.string().email({ tlds: { allow: ["com", "net"] } }).required(),
            password: Joi.string().min(4).required()
        })
        return scheme.validate(user, { abortEarly: false })
    }


    async function sendUserDataToApi() {
        try {
            await axios.post("http://localhost:3001/users", user)
            setUser({
                first_name: "",
                last_name: "",
                nationalID: "",
                email: "",
                password: "",
            });
            navigate('/login')
        }
        catch (err) {
            setError(err.message || "Error occurred");
        }
    }


    function submitRegisterForm(e) {
        e.preventDefault()
        setErrorList([]);
        setError("");

        let validation = validateRegisterForm();
        if (validation.error) {
            setErrorList(validation.error.details);
        } else {
            sendUserDataToApi();
        }
    }


    return (
        <div className="page-bg mt-5 d-flex left-side m-5">
            <div className="w-50 d-flex flex-column justify-content-center align-items-center  ">
                <h3 className="">Welcome to</h3>
                <h6 className=" mb-5">Doctor Portal</h6>
                <i class="fa-solid fa-circle-user login-icon "></i>
            </div>


            <form onSubmit={submitRegisterForm} className="register-form  bg-dark-subtle d-flex flex-column">
                <h2 className="text-center mb-5">Doctors Registration</h2>

                <label className="fw-semibold mb-1 link-password">First Name</label>
                <input onChange={getUserData}
                    type="text"
                    className="form-control mb-4 w-75 mx-auto"
                    placeholder="Enter first name"
                    name='first_name'
                />

                <label className="fw-semibold mb-1 link-password">Last Name</label>
                <input onChange={getUserData}
                    type="text"
                    className="form-control mb-4 w-75 mx-auto"
                    placeholder="Enter last name"
                    name='last_name'
                />

                <label className="fw-semibold mb-1 link-password">Email</label>
                <input onChange={getUserData}
                    type="email"
                    className="form-control mb-4 w-75 mx-auto"
                    placeholder="Enter email"
                    name='email'
                />

                <label className="fw-semibold mb-1 link-password">National ID</label>
                <input onChange={getUserData}
                    type="text"
                    className="form-control mb-4 w-75 mx-auto"
                    placeholder="Enter ID"
                    name='nationalID'
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

                {error && <div className="alert alert-danger">{error}</div>}

                <button type="submit" className="btn btn-primary w-75 mx-auto  ">
                    Submit Application
                </button>
            </form>
        </div>
    )
}
