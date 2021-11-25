import Footer from "./Footer";

let SignUpPage = () => {
    let link = "";
    return(
        <>
            <div class="signup-form">
                <form>
                <h2>Register</h2>
                <p class="hint-text">Create your account. It's free and only takes a minute.</p>
                <div class="form-group">
                    <div class="row">
                        <div class="col"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required" /></div>
                        <div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required" /></div>
                    </div>        	
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" name="email" placeholder="Email" required="required" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                </div>        
                <div class="form-group">
                    <label class="form-check-label"><input type="checkbox" required="required" /> I accept the <a href={link}>Terms of Use</a> &amp; <a href={link}>Privacy Policy</a></label>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
                </div>
            </form>
            <div class="text-center mt-3">Already have an account? <a href={link}>Sign in</a></div>
        </div>
            <Footer />
        </>
    );
}

export default SignUpPage;