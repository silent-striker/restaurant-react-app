import React from 'react'

function Rewards() {
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Rewards</h5>
            <div className="top-button">
                <button className="btn btn-primary" onClick={() => alert("Edit rewards button was clicked")}>Edit Rewards</button>
            </div>

            <div className="bottom-button">
                <button className="btn btn-primary" onClick={() => alert("Assign Points button was clicked")}>Assign Points</button>
            </div>
        </div>
        </div>
    );
}

export default Rewards;