import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react/cjs/react.development";
import { useForm } from "react-hook-form";

let DealSubmit = () =>{

    const[deal, setDeal]= useState({
        dealLink:"",
        dealTitle:"",
        dealPrice:"",
        dealImage:""
    });

    const[dealRecord, setDealRecord] = useState([]);

    const handleChange = (event) =>{
        let {name, value} = event.target;
         setDeal({...deal, [name]: value});
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () =>{
        setDealRecord([...dealRecord, deal]);
        setDeal({
            dealLink:"",
            dealTitle:"",
            dealPrice:"",
            dealImage:""
        });

    }

    return(
        <>
            <Navbar/>
            <div class="container-sm d-flex justify-content-center deal_submit_form">
                <form class="col-sm-6 m-5" onSubmit={handleSubmit(onSubmit)}>
                    <div class="form_title mb-5"><h1>Submit a deal</h1></div>
                    <div class="form-row">
                        <div class="form-group col-10 mb-4">
                            <label for="dealLink">Product Link</label>
                            <input type="url" class="form-control" name="dealLink" ref={register({ required: "link is required" })} value={deal.dealLink} onChange={handleChange} />
                            <p className="warning">{errors.dealLink?.message}</p>
                        </div>
                        <div class="form-group col-10 mb-4">
                            <label for="dealTitle">Product Title</label>
                            <input type="text" class="form-control" name="dealTitle" ref={register({ required: "product name is required" })} value={deal.dealTitle} onChange={handleChange}  />
                            <p className="warning">{errors.dealTitle?.message}</p>
                        </div>
                        <div class="form-group col-10 mb-4">
                            <label for="dealPrice">Product Price</label>
                            <input type="number" class="form-control" name="dealPrice" ref={register({ required: "product price is required" })} value={deal.dealPrice} onChange={handleChange}  />
                            <p className="warning">{errors.dealPrice?.message}</p>
                        </div>
                        <div class="form-group col-10 mb-4">
                            <label for="dealImage">Product Image</label>
                            <input type="file" class="form-control" name="dealImage" ref={register({ required: "product image is required" })} value={deal.dealImage} onChange={handleChange}  />
                            <p className="warning">{errors.dealImage?.message}</p>
                        </div>
                        <div class="form-group col-10 mb-4">
                        <button type="submit" class="container btn btn-primary">Submit Deal</button>
                        </div>
                    </div>
                </form> 
            </div>
            <Footer/>
        </>
    );
}

export default DealSubmit;