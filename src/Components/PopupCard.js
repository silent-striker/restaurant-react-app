import React from 'react';
import '../css/popupcard.css';
 
const PopCard = ({ title, content, onClose }) => {
  return (
    <div className="popup-card-backdrop">
        <div className="popup-card">
            <div className="popup-card-header">
                <h2>{title}</h2>
                <button onClick={onClose} className="popup-card-close-btn">
                  <span class="icon">&times;</span>
                </button>
            </div>
           
            <div className="popup-card-content">
            {content}
            </div>
        </div>
    </div>
  );
};
 
export default PopCard;