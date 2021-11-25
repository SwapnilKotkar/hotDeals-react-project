import Navbar from "./Navbar";
import Footer from "./Footer";

let DealSubmit = () =>{
    return(
        <>
            <Navbar/>
            <div class="container-sm d-flex justify-content-center deal_submit_form">
                <form class="col-sm-6 m-5">
                    <div class="form_title mb-5"><h1>Submit a deal</h1></div>
                    <div class="form-row">
                        <div class="form-group col-12 mb-4">
                            <label for="dealLink">Product Link</label>
                            <input type="url" class="form-control" id="dealLink" required />
                        </div>
                        <div class="form-group col-12 mb-4">
                            <label for="dealTitle">Product Title</label>
                            <input type="text" class="form-control" id="dealTitle" required />
                        </div>
                        <div class="form-group col-12 mb-4">
                            <label for="dealPrice">Product Price</label>
                            <input type="number" class="form-control" id="dealPrice" required />
                        </div>
                        <div class="form-group col-12 mb-4">
                            <label for="dealImage">Product Image</label>
                            <input type="file" class="form-control" id="dealImage" required />
                        </div>
                        <div class="form-group col-12 mb-4">
                        <button type="submit" class="btn btn-primary">Submit Deal</button>
                        </div>
                    </div>
                </form> 
            </div>
            <Footer/>
        </>
    );
}

export default DealSubmit;