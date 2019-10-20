import React from 'react';
import SubmitButton from '../../components/global/button/button'
import {Input} from 'reactstrap';
import PlusMinus from './plusMinus';
function LandingForm(){ 
return (
    <section>
                        <div className="form-row">
                           <div className="col-12 col-sm-4 col-md-4 col-lg-12 mb-3">
                              <label htmlFor="landingat">Landing At</label>
                              <div className="form-group">
                              <Input type="select" className="custom-select form-control"  name="select" id="landingat">
                              <option value="" selected>Select... </option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </Input>
                                
                                  
                              </div>
                           </div>

                           <div className="col-12 col-sm-4 col-md-4 col-lg-12 mb-3">
                              <label htmlFor="visatype">Visa Type</label>
                              <div className="form-group">
                              <Input type="select" className="custom-select form-control"  name="select" id="visaType">
                                    <option value="" selected>Select... </option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                 </Input>
                                 <div className="invalid-feedback">Example invalid custom select feedback</div>
                              </div>
                           </div>

                           <div className="col-12 col-sm-4 col-md-4 col-lg-12 mb-3">
                              <div className="form-group">
                                 <label htmlFor="visatype">Travel Date</label>
                                 <Input type="date" className="form-control" placeholder="08/15/2018" />
                                 <div className="invalid-feedback">Example invalid custom select feedback</div>
                              </div>
                           </div>
                           <div className="col-md-12 mb-3">
                              <div className="row">
                                 <div className="col-12 col-sm-4 pl-0 child-pessenger col-md-4">
                                    <label className="w-100 text-center"> Adults
                                       <br />
                                       <em style={{visibility: 'hidden'}}>(2-18)</em>
                                    </label>
                                    <div className="select-passenger">
                                    <PlusMinus />
                                    </div>

                                 </div>
                                 <div className="col-12 col-sm-4  pl-0 child-pessenger col-md-4">
                                    <label className="w-100 text-center"> Children <br />(2-18)</label>
                                    <div className="select-passenger">
                                    <PlusMinus />
                                       
                                    </div>
                                 </div>

                                 <div className="col-12  col-sm-4  pl-0 child-pessenger col-md-4">
                                    <label className="w-100 text-center"> Infants <br />(0 - 2)</label>
                                    <div className="select-passenger">
                                       
                                       <PlusMinus />
                                       
                                    </div>
                                 </div>

                              </div>

                           </div>


                        </div>
                        <div className="pt-5 text-center">
                        <SubmitButton>Left</SubmitButton>
                           
                        </div>
                        </section>

)
}

export default LandingForm;