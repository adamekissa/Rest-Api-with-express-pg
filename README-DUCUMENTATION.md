
# Project Documentation

A brief description of what this project does and who it's for

This is a REST API to help CREATE, READ, UPDATE AND DELETE books

Components.
1. DB - Connect and communicate with database and stores all scripts 
for SQL queries for database communitcation.
2. Model - Contains logic scripts to manipulate data and application 
behaviours.
3. Node modules - Contains all Node dependencies for overall application
functionalities.
4. Public folder - Public folder keeping html, css files and main.js 
5. Config file(Configuration) - Keeps database credentials and 
sensitive environment variables abstracted.

HOW TO START IT AND INSTRUCTIONS FOR USE.
1. Clone repository
2. Go to terminal and type npm i to install all needed dependencies
3. type npm run dev to start the REST-API
4. To make a get-All books request, use postman or browser and make 
a get request to localhost:3000/books (this will bring all books in database)
5. To make a post a book request, use postman and make a post 
request to localhost:3000/books together with the book to be added 
in json format(this will add the book to books in database)
6. To make a delete book request, use postman and make a delete 
request to localhost:3000/books/{id of book to delete} - (this will
 delete the book from the database)

 DEPENDENCY LIST
    1. "dotenv": "^10.0.0" -- Allow us to use environment variables
    2. "express": "^4.17.2" -- Framework for the REST-API in general
    3. "nodemon": "^2.0.15" -- For easy run and re-run of app after 
    changes and paths to files in the app.
    4. "pg": "^8.7.1 -- For Postgress database connection through Pool