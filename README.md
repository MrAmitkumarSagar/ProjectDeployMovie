# Book  Movie Ticket 
This web App is used to booking movie ticket with name time slot and seat information
\
For this project I used the technology called MERN Stack\
### `MongoDB`
for the Storage of data related to bookings\
Know More -

### `Express Js`
Used for the simplyfying the server creation and as middelware\
Know More -

### `React Js`
React js is used for making the User View as Single Page Application\
Know More -

### `Node js`
Node js for the creating API and working the Backend Script on the server side\
Know More -
\
\
\
\
-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=
# Folder Structure
<pre>
BookMovieTicket +
|                
+--- Frontend 
|         | 
|         +---Node Module
|         +---PubLic
|         +---src 
|         |       |                  
|         |       +----component                             
|         |       |          |                     
|         |       |          +---BookingPage.jsx                  
|         |       |          +---Card.jsx                 
|         |       |          +---CreateBooking.jsx                    
|         |       |          +---MovieCard.jsx                     
|         |       |          +--- NameComponent.jsx                     
|         |       |          +---ShowBooking.jsx         
|         |       |          +---Style.css     
|         |       |                 
|         |       +---App.css              
|         |       +---App.js     
|         |       +---data.js          
|         |       +---index.js 
|         |                       
|         +---.gitignore
|         +---package.json
|         +---package-lock.json
|
|
+--Backend
|         |
|         +--Node Module
|         +--.gitattributes
|         +--connectore.js
|         +--index.js
|         +--package-lock.json
|         +--package.json
|         +--README.md
+---schema.js

</pre>



-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=
# Back End Script


## Getting Started with NPM init

This is created a new Package named BookMovieTicket and initialized the environment to work with Node

### `Git Init` 

This command is for the control the  work flow with repository and traking the imprement with version control managment

### `NPM install Nodmon`


Nodemon is tool used for auto starting the web server Nodemon is watches for the changes in the Scripts and auto
 start the web server when changes is saved

### `NPM install Express`
Express is middleware and librarry for server creation and fatching data from or to End points


# API Documentation
The API related to this project is  on this URL https://deploymovieticket.onrender.com 
there is only two mathod is working on single EndPoint which is /api/booking
these two mathod are GET and POST 
The Get mathod is on this endpoint fetch the data from the Database and send the response in the form
###  Response of Get mathod
the response int form of array of json
     [{\ "seats":{"A1":0,"A2":3,"A3":0,"A4":0,"D1":0,"D2":0}, "_id":"65129274838750d211a1aafe","movie":"Suraj par mangal bhari", "slot":"10:00 AM","__v":0 }...\]

### Post mathod of API
the post mathod recieve the request in the form
      [{ "seats":{"A1":0,"A2":3,"A3":0,"A4":0,"D1":0,"D2":0},"movie":"Suraj par mangal bhari", "slot":"10:00 AM",} ]
  and return in the same as above format
     

\
\
\
\
\
-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=
# Front End Script

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
