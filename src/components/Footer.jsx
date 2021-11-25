let Footer = () =>{
    let link = "";
    return(
        <>
            <div className="container-fluid footer_container bg-dark">
                <footer className="py-5 footer_content">
                <div className="row d-flex justify-content-center footer_columns">
                    <div className="col-2 ">
                    <h5>hotDeals</h5>
                    <p className="tagline">get your hot deal here</p>
                    </div>  
                    <div className="col-1">
                    <h5>Menu</h5>
                    <ul className="nav flex-column footer_menu">
                        <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-muted">Home</a></li>
                        <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-muted">Deals</a></li>
                        <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-muted">User Login</a></li>
                        <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-muted">Admin Login</a></li>
                    </ul>
                    </div>
            
                    <div className="col-4 offset-1">
                    <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p className="newsletter">Monthly digest of whats new and exciting from us.</p>
                        <div className="d-flex w-100 gap-2">
                        <label for="newsletter1" className="visually-hidden">Email address</label>
                        <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                        <button className="btn btn-primary" type="button">Subscribe</button>
                        </div>
                    </form>
                    </div>
                </div>
            
                <div className="d-flex justify-content-center py-4 my-4 border-top footer_copyright">
                    <p className="copyright">&copy; hotDeals 2021, Inc. All rights reserved.</p>
                    {/* <!-- <ul className="d-flex">
                    <li className="ms-3"><i className="bi bi-facebook" style="color: white;"></i></li>
                    <li className="ms-3"><a className="link-dark" href={link}><svg className="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
                    <li className="ms-3"><a className="link-dark" href={link}><svg className="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
                    </ul> --> */}
                </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;