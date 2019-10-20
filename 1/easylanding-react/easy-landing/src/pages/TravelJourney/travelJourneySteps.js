import React from 'react'
import '../TravelJourney/innerPages.scss'
import SubmitButton from '../../components/global/button/button'

class TravelJourneySteps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
    }
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 3 ? 4 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className=" mr-3 p830 button"
          type="button" onClick={this._prev}>
          Previous
        </button>
      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 4) {
      return (
        <button
          className="button p830"
          type="button" onClick={this._next}>
          Next
        </button>
      )
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>

        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          <AirportTransfer
            currentStep={this.state.currentStep}
          />
          <Step2
            currentStep={this.state.currentStep}
          />
          <Step3
            currentStep={this.state.currentStep}
          />
           
           <Step4
            currentStep={this.state.currentStep}
          />

         <div className="col-md-12 pt-5 text-center" style={{clear:"both"}}>
         {this.previousButton()}
          {this.nextButton()}
        </div> 

        </form>
      </React.Fragment>
    );
  }
}

function AirportTransfer(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <div>
      <h2 className="section-heading mb-4"> Set Airport Pickup Preferences</h2>
      <div className="form-section p-0" style={{boxShadow: '0 0 0', background: 'transparent'}}>

        <form>
          <div className="custom-control mb-5 custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="airportPickup" />
            <label className="custom-control-label" for="airportPickup">Need Airport Pickup</label>
          </div>



          <div className="form-group w-100 float-left">
            <label className="pl-0 w-100">Pickup Time</label>
            <input type="time" className="input-boxes form-control col-sm-12 col-md-12" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="00 00 " />
          </div>


        </form>
      </div>

    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return (
      <div className="panel panel-primary setup-content">
        <div class="panel-heading">
          <h3 class="section-heading mb-1">Set Host preferences</h3>
          <h4 class="sub-sub-heading mb-4 pb-3 text-center">Let's connect you to the Host of your choice!! </h4>
        </div>

        <div class="panel-body">

          <div class="form-group w-100 float-left">
            <div class="row" style={{ clear: "both" }}>
              <label class="control-label col-12 col-sm-6 col-md-4">Country</label>
              <div class="col-12 col-sm-6 col-md-8 input-group mb-3">
                <select class="custom-select">
                  <option selected>Choose...</option>
                  <option value="1">Pakistan</option>
                  <option value="2">Sri Lanka</option>
                  <option value="3">Bangladesh</option>
                  <option value="4">Iran</option>
                </select>
              </div>
            </div>
          </div>


          <div class="form-group w-100 float-left">
            <div class="row" style={{ clear: "both" }}>
              <label class="control-label col-12 col-sm-6 col-md-4">State</label>
              <div class="col-12 col-sm-6 col-md-8 input-group mb-3">
                <select class="custom-select">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-group w-100 float-left">
            <div class="row" style={{ clear: "both" }}>
              <label class="control-label col-12 col-sm-6 col-md-4">Language</label>
              <div class="col-12 col-sm-6 col-md-8 input-group mb-3">
                <select class="custom-select">
                  <option selected>Tamil</option>
                  <option value="1">English</option>
                  <option value="2">Hindi</option>
                  <option value="3">Punjabi</option>
                  <option>Gujarati</option>
                  <option value="1">Urdu</option>
                  <option value="2">Telugu</option>
                  <option value="3">Malayalam</option>
                  <option value="4">Bengali</option>
                  <option value="5">Marathis</option>
                </select>
              </div>
            </div>
          </div>


          <div class="form-group w-100 float-left">
            <div class="row" style={{ clear: 'both' }}>
              <label class="control-label col-12 col-sm-6 col-md-4">Profession</label>
              <div class="col-12 col-sm-6 col-md-8 input-group mb-3">
                <select class="custom-select">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>


          <div class="form-group w-100 float-left">
            <div class="row" style={{ clear: "both" }}>
              <label class="control-label col-12 col-sm-6 col-md-4">Hobbies</label>
              <div class="col-12 col-sm-6 col-md-8 input-group mb-3">
                <select class="custom-select">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group w-100 float-left">
            <div class="row" style={{ clear: "both" }}>
              <label class="control-label col-12 col-sm-6 col-md-4">Skills</label>
              <div class="col-12 col-sm-6 col-md-8 input-group mb-3">
                <select class="custom-select">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return (
    <React.Fragment>
      <div className="panel panel-primary setup-content" id="step-2">
                           <div className="panel-heading">
                              <h3 className="section-heading mb-3">Select Exclusive EasyLanding Services</h3>
                           </div>

                           <div className="custom-control mb-3   custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="oba" />
                              <label className="custom-control-label" for="oba">Open Bank Account</label>
                           </div>

                           <div className="custom-control mb-2 custom-checkbox">
                              <input type="checkbox" id="afb" className="custom-control-input" />
                              <label className="custom-control-label" for="afb"> Apply for BCiD</label>
                           </div>

                           <div className="custom-control mb-2 custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="fpa" />
                              <label className="custom-control-label" for="fpa">Help with finding Permanent
                                 accomodation</label>
                           </div>
                           <div className="custom-control mb-2 custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="tpt" />
                              <label className="custom-control-label" for="tpt">One day tour in Public Transport </label>
                           </div>
                           <div className="custom-control mb-3   custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="gst" />
                              <label className="custom-control-label" for="gst">Grocery and Shopping Tour</label>
                           </div>
                           <div className="custom-control mb-3   custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="fnc" />
                              <label className="custom-control-label" for="fnc">Help with finding a new car</label>
                           </div>
                           <div className="custom-control mb-3   custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="hic" />
                              <label className="custom-control-label" for="hic"> In House immigration Consultation</label>
                           </div>
                           <div className="custom-control mb-3   custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="asn" />
                              <label className="custom-control-label" for="asn">Apply for SIN Number</label>
                           </div>
                           <div className="custom-control mb-3   custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="tdl" />
                              <label className="custom-control-label" for="tdl">Take Driving Lessons</label>
                           </div>
                           <div className="custom-control mb-3   custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="nap " />
                              <label className="custom-control-label" for="nap">Need Airport Pickup</label>
                           </div>
 

                        </div>
       
    </React.Fragment>
  );
}

 
function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  }
  return (
    <React.Fragment>
       <div class="panel panel-primary setup-content">
                           <div className="panel-heading">
                              <h3 className="section-heading mb-1">Any additional Service Request</h3>
                           </div>
                           <div className="panel-body">
                              <p> Any kind og additional service you need then please mention in this box</p>
                              <div className="form-group"> 
                                 <textarea className="form-control is-invalid" style={{minHeight:'200px'}}
                                    id="validationTextarea" placeholder="Required example textarea" required></textarea> 
                              </div>

                              <div className="col-md-12 text-center" style={{ clear: 'both' }}>
                                 <button className="button mr-3 mt-4" type="button">Finish</button>
                              </div>
                           </div>
                        </div>
       
    </React.Fragment>
  );
}

 

export default TravelJourneySteps;