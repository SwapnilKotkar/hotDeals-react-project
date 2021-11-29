import {NavLink} from "react-router-dom";

let SignUpPage = () => {
    let link = "";
    return(
        <>
            <div className="signup-form">
                <form>
                <h2>Register</h2>
                <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                <div className="form-group">
                    <div className="row">
                        <div className="col"><input type="text" className="form-control" name="first_name" placeholder="First Name" required="required" /></div>
                        <div className="col"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required" /></div>
                    </div>        	
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" placeholder="Email" required="required" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                </div>        
                <div className="form-group">
                    <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href={link}>Terms of Use</a> &amp; <a href={link}>Privacy Policy</a></label>
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