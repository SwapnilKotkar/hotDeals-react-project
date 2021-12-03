import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";


const UserLoginPage = () => {
    const link = "";

    const [login, setLogin] = useState({
       username: "",
       password: "" 
    });

    const [loginRecord, setLoginRecord] = useState([]);

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setLogin({...login, [name]: value});
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () =>{
        setLoginRecord([...loginRecord, login])
        setLogin({
            username: "",
            password: "" 
         });
    }


    return(
        <>
            <div class="login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 class="text-center">User Login</h2>		
                    {/* <div class="text-center social-btn">
                        <a href={link} class="container btn btn-primary btn-block text-center">Sign in with <b>Facebook</b></a>
                        <a href={link} class="container btn btn-danger btn-block text-center">Sign in with <b>Google</b></a>
                    </div>
                    <div class="or-seperator"><i>or</i></div> */}
                    <div class="form-group">
                            <input type="text" class="form-control" name="username" placeholder="Username" ref={register({ required: "user name is required" })} value={login.username} onChange={handleChange} />
                            <p className="warning">{errors.username?.message}</p>
                    </div>
                    <div class="form-group">
                            <input type="password" class="form-control" name="password" placeholder="Password" ref={register({ required: "password is required" })} value={login.password} onChange={handleChange} />
                            <p className="warning">{errors.password?.message}</p>
                    </div>   
                    <div class="clearfix">
                        <label class="float-left form-check-label p-2"><input type="checkbox" required /> Remember me</label>
                        <a href={link} class="float-right text-success">Forgot Password?</a>
                    </div>       
                    <div class="form-group">
                        <button type="submit" class="container btn btn-success btn-block login-btn">Sign in</button>
                    </div>
                    
                    <div class="hint-text mt-3">Don't have an account? <NavLink to="/signup" class="text-success">Register Now!</NavLink></div>     
                    <div className="container-sm d-flex justify-content-center">
                        <NavLink to="/" className="nav-link p-2 text-muted text-decoration-underline">Home</NavLink>
                        <NavLink to="/adminlogin" className="nav-link p-2 text-muted text-decoration-underline">Admin Login</NavLink>
                </div>           
                </form>        
            </div>            
        </>
    );
}

export default UserLoginPage;