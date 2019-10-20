import React from 'react'
import bgImage from '../../assets/images/header-banner.jpg';
import LandingForm from './homeRightForm';

const formBg = {
    background: `url(${bgImage})`
}

const HomeForm = () =>{
    return(
        <div className="row below-header mt-4" style={formBg}>
         <div className="container">
            <div className="row">
               <div className="col-md-12 col-lg-7">
                  <div className="content">
                     <h3 className="mb-0 mt-5">LET'S SETTLE YOU QUICKLY IN YOUR NEW HOME</h3>
                     <h4 className="mb-5"> <span>CANADA!!!</span></h4>
                    
                  </div>
               </div>
               <div className="col-md-12 col-lg-5 banner-right">
                  <div className="section-form">
                     <h2> LET'S START!!</h2>
                     <form className="needs-validation" action='javascript:void(0);' novalidate>
                        <LandingForm />
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}


export default HomeForm