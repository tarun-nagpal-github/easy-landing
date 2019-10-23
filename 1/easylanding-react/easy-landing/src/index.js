import React from 'react';
import ReactDOM from 'react-dom'; 
// import './assets/sass/style.scss';
import Header from './components/global/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer  from "./components/global/footer/footer";
import HomePage from './pages/homepage/homePage';
// import TravelJourney from './pages/TravelJourney/travelJourney'
import '../src/common.scss'


class TodoContent extends React.Component{
  render(){
    return( 
      <section>
          <div className="outer-container">
          <Header />
          {/* <TravelJourney /> */}
          <HomePage />    
          <Footer />
         
          </div>
        
      </section>
    )
  }
} 
ReactDOM.render(<TodoContent />, document.getElementById('root'));