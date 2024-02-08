import React from 'react'

function Users() {
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Users</h5>
            <div className="top-button">
                <button className="btn btn-primary" onClick={() => alert("Search Users button was clicked")}>Search Users</button>
            </div>

            <div className="bottom-button">
                <button className="btn btn-primary" onClick={() => alert("Queries button was clicked")}>Queries</button>
            </div>
        </div>
        </div>
    );
}

export default Users;