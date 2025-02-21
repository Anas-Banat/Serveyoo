const Counting = () => {
    return (
      <div className="bg-primary">
        <div className="container mx-auto py-16 px-4">
          <div className="row">
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <i className="fa fa-user"></i>
                <div className="timer" data-to="1782628" data-speed="5000">
                  1,782,628
                </div>
                <span className="medium">Total Clients</span>
              </div>
            </div>
  
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <i className="fa fa-user-md"></i>
                <div className="timer" data-to="4799" data-speed="5000">
                  4,799
                </div>
                <span className="medium">Home Cleaning</span>
              </div>
            </div>
  
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <i className="fa fa-hospital"></i>
                <div className="timer" data-to="31" data-speed="5000">
                  39,105
                </div>
                <span className="medium">Car Cleaning</span>
              </div>
            </div>
  
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <i className="fa fa-medkit"></i>
                <div className="timer" data-to="104" data-speed="5000">
                  104
                </div>
                <span className="medium">Commerical Cleaning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Counting;
  