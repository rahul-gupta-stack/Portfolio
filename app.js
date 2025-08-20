// Core Module
const path = require('path');
const express = require('express');

// local module
const rootDir = require('./utils/pathUtil');
const propertyRouter = require('./routes/propertyRouter');
const { postPropertyRouter } = require('./routes/postPropertyRouter');
const errorController = require('./controller/errorController');

const app = express();

app.set('view engine', 'ejs'); // Set the view engine to EJS Dependency
app.set('views', 'views');

app.use(express.static(path.join(rootDir, 'public'))); // Serve static files from the public directory
app.use(express.urlencoded());
app.use(propertyRouter);
app.use("/property", postPropertyRouter);    //common path for property router
app.use(errorController.pageNotFound);

const PORT = 5001;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});