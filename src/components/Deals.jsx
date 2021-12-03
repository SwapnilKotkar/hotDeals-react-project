import DealsCard from "./DealsCard";
import DealsData from "./DealsData";

const Deals = () =>{
    return(
        <>
            <section class="py-2 deals_list">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-start"> 
                        {DealsData.map((val) => {
                            return (
                                <DealsCard dealName={val.name} dealImage={val.image} dealPrice={val.price} dealLink ={val.link} />
                            )
                        })}
                     </div>
                </div>
            </section>
        </>
    );
}

export default Deals;