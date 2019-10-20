import React from 'react'

import JourneyLeft from './journeyLeft';
import JourneyRight from './journeyRight';

const TravelJourney = () =>{
    return(
        <div class="inner-container row">
            <div class="container">
                <div class="col-md-12">
                    <div class="row">
                        <JourneyLeft />
                        <JourneyRight />
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default TravelJourney;