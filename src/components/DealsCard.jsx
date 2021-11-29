
let DealsCard = (props) =>{
    return(
        <>
            <div class="col col-12 mb-4 deal_details">
                  <div class="card h-100">
                      <img class="card-img-top" src={props.dealImage} alt="..." />
                      <div class="card-body p-4">
                          <div class="text-center">
                              <h5 class="fw-bolder">{props.dealName}</h5>
                              {props.dealPrice}
                          </div>
                      </div>
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div class="text-center"><a class="btn btn-outline-dark mt-auto" href={props.dealLink}>Get Deal</a></div>
                      </div>
                  </div>
              </div>
        </>
    );
}

export default DealsCard;