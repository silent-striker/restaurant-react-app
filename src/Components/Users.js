import React from 'react'

function Users() {
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Users</h5>
            <div className="top-button">
                <button className="btn btn-primary">Search Users</button>
            </div>

            <div className="bottom-button">
                <button className="btn btn-primary">Queries</button>
            </div>
        </div>
        </div>
    );
}

export default Users;