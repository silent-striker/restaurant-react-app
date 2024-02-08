import React from 'react'

function Rewards() {
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Rewards</h5>
            <div className="top-button">
                <button className="btn btn-primary">Edit Rewards</button>
            </div>

            <div className="bottom-button">
                <button className="btn btn-primary">Assign Points</button>
            </div>
        </div>
        </div>
    );
}

export default Rewards;