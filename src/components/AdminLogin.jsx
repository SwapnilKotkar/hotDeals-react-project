import { NavLink } from 'react-router-dom';

let AdminLogin = () => {
    let link = "";
    return(
        <>
            <div class="login-form">
                <form>
                    <h2 class="text-center">Sign in</h2>		
                    <div class="text-center social-btn">
                        <a href={link} class="btn btn-primary btn-block"> Sign in with <b>Facebook</b></a>
                        <a href={link} class="btn btn-danger btn-block"> Sign in with <b>Google</b></a>
                    </div>
                    <div class="or-seperator"><i>or</i></div>
                    <div class="form-group mb-2">
                        <div class="input-group">
                            <input type="text" class="form-control" name="username" placeholder="Username" required="required" />
                        </div>
                    </div>
                    <div class="form-group mb-2">
                        <div class="input-group">
                            <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
                        </div>
                    </div>        
                    <div class="form-group">
                        <button type="submit" class="btn btn-success btn-block login-btn">Sign in</button>
                    </div>
                    <div class="clearfix">
                        <label class="float-left form-check-label p-2"><input type="checkbox" /> Remember me</label>
                        <a href={link} class="float-right text-success">Forgot Password?</a>
                    </div>  
                    <div className="container-sm d-flex justify-content-center">
                        <NavLink to="/" className="nav-link p-2 text-muted text-decoration-underline">Home</NavLink>
                        <NavLink className="nav-link p-2 text-muted text-decoration-underline" to="/login">User Login</NavLink>
                </div> 
                </form>        
            </div>
        </>
    );
}

export default AdminLogin;