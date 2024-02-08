import 'bootstrap/dist/css/bootstrap.min.css'
import './css/common.css';
import Header from './Components/Header'
import Restaurants from './Components/Restaurants'
import Users from './Components/Users'
import Discounts from './Components/Discounts'
import Rewards from './Components/Rewards'
import React, { useState } from 'react';


function App(){
  const [showPopUp, setShowPopUp] = useState(false);
  const handleClose = () => setShowPopUp(false);

  return (
    <div>
        <Header />
        <div className='dashboard-section container'>
          <div className='dashboard-row1 row'>
            
            <div className='col-md-6'>
              <Restaurants />
            </div>

            <div className='col-md-6'>
                <Users/>
            </div>
          </div>


          <div className='dashboard-row2 row'>
            
            <div className='col-md-6'>
              <Discounts showPopUp={showPopUp} setShowPopUp={setShowPopUp} handleClose={handleClose} />
            </div>

            <div className='col-md-6'>
              <Rewards />
            </div>
          </div>    
        
        </div>
    </div>
  );
}

export default App;
