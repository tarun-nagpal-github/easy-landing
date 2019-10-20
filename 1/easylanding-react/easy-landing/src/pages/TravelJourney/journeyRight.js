import React from 'react'




const JourneyRight = () =>{
    return(
        
        <div class="col-sm-12 offset-sm-0 col-md-6 offset-md-1">
                     <h2 class="section-heading mb-4"> Your package detail so far… </h2>

                     <h3 class="sub-heading">Primary Information</h3>

                     <dl class="col-md-12 package-details">
                        <div class="row" style={{clear : "both"}}>
                           <dt class="col-sm-12 col-md-6">Landing at : </dt>
                           <dd class="col-sm-12 col-md-6">airport name </dd>

                           <dt class="col-sm-12 col-md-6">Arrival on : </dt>
                           <dd class="col-sm-12 col-md-6">
                              10 - Jan - 2020
                           </dd>

                           <dt class="col-sm-12 col-md-6">Family Members : </dt>
                           <dd class="col-sm-12 col-md-6"> 2 Adults, 2 Kids, 0 Infants.</dd>

                           <dt class="col-sm-6 text-truncate">Visa Type : </dt>
                           <dd class="col-sm-12 col-md-6">Student Visa</dd>
                        </div>
                     </dl>

                     <dl class="col-md-12 package-details">
                        <div class="row" style={{clear : "both"}}>
                           <dt class="col-sm-6 text-truncate"><strong>Services Selected</strong></dt>
                           <dd class="col-sm-12 col-md-6"><strong>Price</strong></dd>

                           <h3 class="sub-sub-heading mb-4">Pickup Details</h3>

                           <dt class="col-sm-12 col-md-6">Need airport pickup : Yes</dt>
                           <dd class="col-sm-12 col-md-6"> $50 </dd>
                           <div class="clearfix">&nbsp;</div>
                           <dt class="col-sm-12 col-md-6">Pick up TIme : 11 - Jan - 2020</dt>
                           <dd class="col-sm-12 col-md-6">10 - Jan - 2020</dd>

                           <h3 class="sub-sub-heading mb-4">Accomodation</h3>

                           <dt class="col-sm-6 text-truncate">Check in: 11 - Jan - 2020 </dt>
                           <dd class="col-sm-12 col-md-6">Student Visa</dd>

                           <dt class="col-sm-6 text-truncate">Type : Luxury</dt>
                           <dd class="col-sm-12 col-md-6">Student Visa</dd>

                           <dt class="col-sm-6 text-truncate">No. of Rooms : 1</dt>
                           <dd class="col-sm-12 col-md-6">$1000</dd>

                           <dt class="col-sm-6 text-truncate">No. of Bathrooms : 1</dt>
                           <dd class="col-sm-12 col-md-6">$1000</dd>

                           <h3 class="sub-sub-heading mb-4">Ammenities Selected <em>(*Show only selected Amenties)</em>
                           </h3>

                           <dt class="col-sm-6 text-truncate"> Air Conditioner </dt>
                           <dd class="col-sm-12 col-md-6">$50</dd>

                           <dt class="col-sm-6 text-truncate"> In-suite Laundry </dt>
                           <dd class="col-sm-12 col-md-6">$50</dd>

                           <dt class="col-sm-6 text-truncate"> Crib </dt>
                           <dd class="col-sm-12 col-md-6">$50</dd>

                           <dt class="col-sm-6 text-truncate">Grocery </dt>
                           <dd class="col-sm-12 col-md-6">$0</dd>

                           <dt class="col-sm-6 text-truncate text-right">Sub Total</dt>
                           <dd class="col-sm-12 col-md-6">$0</dd>

                        </div>
                     </dl>
                  </div>



    )
}

export default JourneyRight;