# HPDF
Task one

This task involves me to get some data from external APIs and display them. And perform some other miscellaneous tasks. Necessary documentation about the installation process and the endpoints have been described below.

Installation

First, you are required to run NPM inside this project which can be achieved by doing this
NPM
$ npm install
Now, you can simply start the application by running this command
$ node .
Endpoints

Each endpoint serves different uses. In the app.js each METHOD is grouped together.

Endpoint	METHOD	Description
/	GET	Returns the index page of the site that displays a simple string "Hello Team - HPDF" at http://localhost:8080
/authors	GET	Fetches list of authors and posts from an API & displays a list of authors and the count of their posts at 
/setcookie	GET	The server sets two cookies (name, age) which contains the name and age of the author at 
/getcookies	GET	Fetches & displays the stored key-values of the cookies saved previously by /setcookie endpoint
/robots.txt	GET	Denies requests, responds with a 403 status code and returns a rendered error page
/html	GET	Responds with a rendered HTML page that works even in Windows NT 3.5
/input	GET	Responds with an HTML form that sends user entered data to POST /output
/display	POST	Displays the data sent from GET /input to the browser as response and in the Console as well
