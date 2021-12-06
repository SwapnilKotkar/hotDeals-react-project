import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState } from "react/cjs/react.development";
import { useForm } from "react-hook-form";


const DealSubmit = () =>{

    const[deal, setDeal]= useState({
        dealLink:"",
        dealTitle:"",
        dealPrice:"",
        dealCategory:"",
        dealImage:""
    });

    const[dealRecord, setDealRecord] = useState([]);

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setDeal({...deal, [name]: value});
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () =>{
        setDealRecord([...dealRecord, deal]);
        setDeal({
            dealLink:"",
            dealTitle:"",
            dealPrice:"",
            dealCategory:"",
            dealImage:""
        });
    }

    return(
        <>
            <Navbar/>
            <div class="container-sm d-flex justify-content-center deal_submit_form">
                <form class="col-sm-6 m-3" onSubmit={handleSubmit(onSubmit)}>
                    <div class="form_title mb-4 text-center"><h1>Submit a deal</h1></div>
                    <div class="form-row row justify-content-center">
                        <div class="form-group col-10 mb-3">
                            <label for="dealLink">Product Link</label>
                            <input type="url" class="form-control" name="dealLink" ref={register({ required: "link is required" })} value={deal.dealLink} onChange={handleChange} />
                            <p className="warning">{errors.dealLink?.message}</p>
                        </div>
                        <div class="form-group col-10 mb-3">
                            <label for="dealTitle">Product Title</label>
                            <input type="text" class="form-control" name="dealTitle" ref={register({ required: "product name is required" })} value={deal.dealTitle} onChange={handleChange}  />
                            <p className="warning">{errors.dealTitle?.message}</p>
                        </div>
                        <div class="form-group col-10 mb-3">
                            <label for="dealPrice">Product Price</label>
                            <input type="number" class="form-control" name="dealPrice" ref={register({ required: "product price is required" })} value={deal.dealPrice} onChange={handleChange}  />
                            <p className="warning">{errors.dealPrice?.message}</p>
                        </div>
                        <div class="form-group col-10 mb-3">
                        <label for="dealCategory">Product Category</label>
                        <select class="form-select" name="dealCategory" ref={register({ required: "product category is required" })} onChange={handleChange}>
                            <option value="">All</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Home & Living">Home & Living</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Groceries">Groceries</option>
                            <option value="Travel">Travel</option>
                            <option value="Sports & Outdoors">Sports & Outdoors</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Vehicles">Vehicles</option>
                            <option value="Healthy & Beauty">Healthy & Beauty</option>
                        </select>
                        <p className="warning">{errors.dealCategory?.message}</p>
                        </div>
                        <div class="form-group col-10 mb-3">
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