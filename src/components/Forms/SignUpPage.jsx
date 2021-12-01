import {NavLink} from "react-router-dom";
// import useForm from './useForm';
import React, {useState} from 'react';
import { useForm } from "react-hook-form";

let SignUpPage = () => {
    let link = "";

    const [values, setValues]= useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    });

    const [record, setRecord]=useState([]);

    const handleChange = (event) => {
        const {name, value} = event.target;

        setValues({...values, [name]:value});
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () => {
        setRecord([...record, values]);
    };
    

    return(
        <>
            <div className="signup-form">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h2>Register</h2>
                <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                 <div className="form-group">
                    <input type="text" className="form-control" name="firstName" placeholder="First Name" ref={register({ required: "first name is required" })} value={values.firstName} onChange={handleChange} />
                    <p className="warning">{errors.firstName?.message}</p>
                </div>
                <div className="form-group">
                <input type="text" className="form-control" name="lastName" placeholder="Last Name" ref={register({ required: "last name is required" })} value={values.lastName} onChange={handleChange} />
                <p className="warning">{errors.lastName?.message}</p>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" placeholder="Email" ref={register({ required: "Email is required", pattern: { value: /\S+@\S+\.\S+/i, message: "This is not a valid email" }})} value={values.email} onChange={handleChange} />
                    <p className="warning">{errors.email?.message}</p>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password" ref={register({ required: "Password is required", minLength: {value: 4, message: "Password must be more than 4 characters" }, maxLength: { value: 10, message: "Password cannot exceed more than 10 characters" }})} value={values.password} onChange={handleChange} />
                    <p className="warning">{errors.password?.message}</p>
                </div>       
                <div className="form-group">
                    <label className="form-check-label"><input type="checkbox" required /> I accept the <a href={link}>Terms of Use</a> &amp; <a href={link}>Privacy Policy</a></label>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                </div>
                </form>
                <div className="text-center mt-3">Already have an account? <NavLink to="/login"><span style={{color:"blue" }} >Sign in</span></NavLink></div>
                <div className="container-sm d-flex justify-content-center">
                    <NavLink to="/" className="nav-link p-2 text-muted">Home</NavLink>
                    <NavLink to="/adminlogin" className="nav-link p-2 text-muted">Admin Login</NavLink>
                </div>
            </div>
        </>
    );
}

export default SignUpPage;