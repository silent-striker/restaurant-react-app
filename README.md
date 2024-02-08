# Assignment 1

- _Date Created_: 7 FEB 2024
- _Last Modification Date_: 8 FEB 2024
- _Assignment URL_: https://priyatamsomagattu-assignment1.netlify.app/
- _Git URL_: https://git.cs.dal.ca/somagattu/csci-5709-assignments

## Authors

- [Priyatam Reddy Somagattu](pr889078@dal.ca)

## Deployment

I imported an existing front-end project from GitHub to Netlify, where I had a repository prepared. Then, I configured the build settings to deploy the application. Eventually, the app was successfully deployed and is now live at the provided link.

## Built With

- [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
- [Bootstrap](https://getbootstrap.com/) - CSS Library
- [npm](https://docs.npmjs.com//) - Dependency Management

## Sources Used

### Header.js

*Lines 12-23*

```
    <div className="dropdown-hover">
        <button className="btn btn-transparent profile-section" type="button">
            <img src={profile_image} alt="logo" className="profile-image"/>
            <span className="profile-text">Profile</span>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item">View Profile</button>
            <button className="dropdown-item">Edit Profile</button>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={() => alert("clicked on logout button")}>Logout</button>
        </div>
    </div>
```

The code was created by adapting dropdown menu from [Official - Bootstrap dropdown documentation](https://getbootstrap.com/docs/4.0/components/dropdowns/)

```
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div>
```

- After understanding the code in [Official - Bootstrap dropdown documentation](https://getbootstrap.com/docs/4.0/components/dropdowns/). I adapted the code for profile dropdown using button and changing the css of the hover dropdown to suit my need.
- I had a vague idea about dropdown but didn't know how to start and what was the structure of the code. The [Official - Bootstrap dropdown documentation](https://getbootstrap.com/docs/4.0/components/dropdowns/)'s dropdown code was a good reference as I thought it was necessary for a profile dropdown menu.

### Restaurants.js
*Lines 5-16*

```
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Restaurants</h5>
            <div className="top-button">
                <button className="btn btn-primary" onClick={() => alert("View All button was clicked")}>View All</button>
            </div>
            
            <div className='bottom-button'>
                <button className="btn btn-primary" onClick={() => alert("Request button was clicked")}>Requests</button>
            </div>
        </div>
    </div>
```

The code was created by adapting dropdown menu from [Official - Bootstrap cards documentation](https://getbootstrap.com/docs/4.0/components/card/).

```
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
```

- I decided to use [Official - Bootstrap cards documentation](https://getbootstrap.com/docs/4.0/components/card/) as a reference because I knew previously that cards are a great way to create sections to make the website have clear division.
- The admin dashboard component needed such clear sections that is both responsive and neatly organised.
- I adapted the above code to create components of individual sections for which I could use it and changed the CSS accordingly.

### Rewards.js
*Lines 1-20*
```
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
```

The above code was created by adapting from the [W3Schools documentation](https://www.w3schools.com/react/react_components.asp).

```
    function Car() {
        return <h2>Hi, I am a Car!</h2>;
    }

export default Car;
```

- Using the above code as reference I was able to build on it to understand how to write react functional components.
- This code is important as it is the fundamental structure of a react component.

## Acknowledgments

- The code provided valuable insights and served as a foundation for understanding and learning it's functionality and logic. I am grateful for their work and dedication.
- It provided valuable insights and influenced my approach in understanding and learning the approaches and specific techniques. Their contribution is highly appreciated.
