import React from 'react'

const handleClick = (e) => {
    alert("testing create discount");
}

function AddDiscount() {
  return (
    <div className='discount-card-body'>
        <div>
            <label for="Title">Title:</label>
            <input type="text" id="Title" name="title" />
        </div>
        
        <div>
            <div>
                <label for="code">Code:</label>
                <input type="text" id="Code" name="Code" />
            </div>
            <div>
                <label for="Expiry">Expiry:</label>
                <input type="text" id="Expiry" name="Expiry" />
            </div>
        </div>
            
        <div>
            <label for="maxDiscount">Max discount</label>
            <input type="text" id="maxDiscount" name="maxDiscount" />
        </div>

        <div className='bottom-button'>
                <button className="btn btn-primary" onClick={handleClick}>Create</button>
        </div>
    </div>
  );
}

export default AddDiscount;