import React from 'react'
import PopupCard from './PopupCard';
import AddDiscount from './AddDiscount';

function Discounts({showPopUp, setShowPopUp, handleClose}) {
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Discounts</h5>
            <div className="top-button">
                <button className="btn btn-primary">All Discounts</button>
            </div>

            <div className="bottom-button">
                <button className="btn btn-primary" onClick={() => setShowPopUp(true)} >Add Discount</button>
                {showPopUp && (
                <PopupCard
                    title="Add Discount"
                    content={<AddDiscount setShowPopUp={setShowPopUp}/>}
                    onClose={handleClose}
                />
            )}
            </div>
        </div>
        </div>
    );
}

export default Discounts;