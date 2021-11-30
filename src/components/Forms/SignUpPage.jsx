import {NavLink} from "react-router-dom";
import useForm from './useForm';
import validate from './ValidateInfo';



let SignUpPage = ({submitForm}) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
      );

    let link = "";

    return(
        <>
            <div className="signup-form">
                <form onSubmit={handleSubmit} noValidate>
                <h2>Register</h2>
                <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                <div className="form-group">
                    <div className="row">
                        <div className="col"><input type="text" className="form-control" name="firstName" placeholder="First Name" value={values.firstName} onChange={handleChange} />{errors.firstName && <p>{errors.firstName}</p>}
                         </div>
                        <div className="col"><input type="text" className="form-control" name="lastName" placeholder="Last Name" value={values.lastName} onChange={handleChange}  /> {errors.lastName && <p>{errors.lastName}</p>}  </div>
                    </div>        	
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" placeholder="Email" value={values.email} onChange={handleChange}  /> {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password1" placeholder="Password" value={values.password1} onChange={handleChange}  /> {errors.password1 && <p>{errors.password1}</p>}
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password2" placeholder="Confirm Password" value={values.password2} onChange={handleChange}  /> {errors.password2 && <p>{errors.password2}</p>}
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