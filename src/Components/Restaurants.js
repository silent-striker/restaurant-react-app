import React from 'react'

function Restaurants() {
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Restaurants</h5>
            <div className="top-button">
                <button className="btn btn-primary">View All</button>
            </div>
            
            <div className='bottom-button'>
                <button className="btn btn-primary">Requests</button>
            </div>
        </div>
        </div>
    );
}

export default Restaurants;