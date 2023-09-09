import React, {Component} from 'react';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Menu from './components/Layouts/Menu'; 
import MobileHeader from './components/Layouts/MobileHeader';
import Modals from './components/Layouts/Modals';
import Home from './components/Pages/Home';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

class MainContainer extends Component {
  render (){
    return (
      <div className="body-wrapper">
        <Router>
            <Header />
            <Modals />
            <Menu/>
            <div className="ltn__utilize-overlay"></div>
                <MobileHeader />
                  <div className=''>
                    <Routes>
                    <Route path="/" element={<Home/>} />
                    </Routes>
                  </div>
            <Footer/>
      </Router>
      </div>
      
    )
  }
}

export default MainContainer;
