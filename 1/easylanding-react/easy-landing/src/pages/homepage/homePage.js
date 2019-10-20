import React from 'react';
import '../homepage/home.scss';
import HomeForm from './homeForm'
import SubmitButton from '../../components/global/button/button';
import VisaIcon from '../../assets/images/study-visa-icon.png'
import WorkIcon from '../../assets/images/work-visa.png'
import VisitorVisa from '../../assets/images/visitor-visa.png'


const HomePage = () =>{
    return (
       <section>
         <HomeForm />    
         
         <div class="row our-services">
         <div class="container">
            <div class="row">
               <div class="col-12 col-sm-12 col-md-12 col-lg-3"> 
                  <h4 class="section-heading-left">Anything
                     you need</h4>

                  <p class="cta"><SubmitButton class="button">Get in Touch</SubmitButton></p>
               </div>
               <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                  <div class="section">
                  <span class="icon"><img src={VisaIcon} alt="" /></span>
                  <h2 class="section-heading">Study Visa with
                     IELTS</h2>
                  <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan
                     tincidunt.</p>
                  </div>
               </div>

               <div class="col-12 col-sm-6  col-md-6 col-lg-3"><div class="section"> 
                  <span class="icon"><img src={WorkIcon} alt="" /></span>
                  <h2 class="section-heading">Study Visa with
                     IELTS</h2>
                  <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan
                     tincidunt.</p></div>
               </div>

               <div class="col-6 offset-3 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-3 offset-lg-0"><div class="section"> 
                  <span class="icon"><img src={VisitorVisa} alt="" /></span>
                  <h2 class="section-heading">Temporary Visitor Visa
                     </h2>
                  <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan
                     tincidunt.</p></div>
               </div>


            </div>
         </div>
      </div>
      </section>
         )
}

export default HomePage;