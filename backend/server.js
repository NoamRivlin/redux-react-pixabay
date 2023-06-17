const express = require('express');
// we require the dotenv package to access the .env file
// which holds our environment variables such as the API_KEY
const dotenv = require('dotenv')
// we require the cors package to enable cross-origin resource sharing
// so that our frontend can make requests to our backend
// without the cors package, we would get a CORS error
const cors = require('cors');
// we require the path package to correctly resolve the path to the .env file
const path = require('path');
// errorHandler is a middleware function for handling errors
const { errorHandler } = require('./middleware/errMiddleware');
// we call the config method on the dotenv object to access the .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// app is an instance of express which we use to create our server and handle our routes and middleware functions 
const app = express();
// we use the express.json() middleware function to parse JSON bodies of requests 
app.use(express.json());
// we use the express.urlencoded() middleware function to parse URL-encoded bodies of requests 
app.use(express.urlencoded({ extended: false }));
// we use the cors middleware function to enable cross-origin resource sharing 
// and allow requests from the frontend to the backend
// we set the origin to http://localhost:3000 because that is where our frontend is running
// we set the methods to GET because we only need to make GET requests to the pixabay API
app.use(cors({
    methods: ['GET',]
}));
// we set the PORT to the BACKEND_PORT environment variable or 4000 if the environment variable is not set
const PORT = process.env.BACKEND_PORT || 4000
// we use the app.use() method to use the galleryRoutes middleware function for all routes that start with /api/gallery
// for example, the route /api/gallery/photos will be handled by the galleryRoutes middleware function
app.use('/api/gallery', require('./routes/galleryRoutes'));
// the last use method is for handling errors
app.use(errorHandler);
// this is where we start the server and listen for requests on the PORT 
// we log a message to the console to indicate that the server is running
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
