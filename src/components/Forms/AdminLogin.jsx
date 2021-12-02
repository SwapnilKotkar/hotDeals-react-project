import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";


let AdminLogin = () => {
    let link = "";

    let [adminLogin, setAdminLogin] = useState({
        username: "",
        password: "" 
     });

    const [adminLloginRecord, setAdminLoginRecord] = useState([]);
 
     let handleChange = (event) =>{
         let {name, value} = event.target;
         setAdminLogin({...adminLogin, [name]: value});
     }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () =>{
        setAdminLoginRecord([...adminLloginRecord, adminLogin]);
        setAdminLogin({
            username: "",
            password: "" 
         });
    }

    return(
        <>
            <div class="login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 class="text-center">Admin Login</h2>		
                    <div class="text-center social-btn">
                        <a href={link} class="container btn btn-primary btn-block text-center"> Sign in with <b>Facebook</b></a>
                        <a href={link} class="container btn btn-danger btn-block text-center"> Sign in with <b>Google</b></a>
                    </div>
                    <div class="or-seperator"><i>or</i></div>
                    <div class="form-group">
                            <input type="text" class="form-control" name="username" placeholder="Username" ref={register({ required: "user name is required" })} value={adminLogin.username} onChange={handleChange} />
                            <p className="warning">{errors.username?.message}</p>
                    </div>
                    <div class="form-group">
                            <input type="password" class="form-control" name="password" placeholder="Password" ref={register({ required: "password is required" })} value={adminLogin.password} onChange={handleChange} />
                            <p className="warning">{errors.password?.message}</p>
                    </div>    
                    <div class="clearfix">
                        <label class="float-left form-check-label p-2"><input type="checkbox" required/> Remember me</label>
                        <a href={link} class="float-right text-success">Forgot Password?</a>
                    </div>      
                    <div class="form-group">
                        <button type="submit" class="container btn btn-success btn-block login-btn">Sign in</button>
                    </div>
                   
                    <div className="container-sm d-flex justify-content-center mt-2">
                        <NavLink to="/" className="nav-link p-2 text-muted text-decoration-underline">Home</NavLink>
                        <NavLink className="nav-link p-2 text-muted text-decoration-underline" to="/userlogin">User Login</NavLink>
                </div> 
                </form>        
            </div>
        </>
    );
}

export default AdminLogin;