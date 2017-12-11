Task one

The first task as part of The Hasura Product Development Fellowship.

Installation

a) First, you are required to run NPM inside this project which can be achieved by doing this NPM

    $ npm install

b) Now, you can simply start the application by running this command 

    $ node.

Endpoints

Each endpoint serves different uses. In the app.js each METHOD is grouped together.

    Endpoint  	  METHOD	    Description

1.  /	            GET     Returns the index page of the site

2.  /authors	    GET	    Fetches list of authors and posts from an API and prints a list of authors and the count of their posts

3.  /setcookie	  GET	    The server sets two cookies (name, age) which contains the name and age.

4.  /getcookies	  GET	    Responds with the content took from the cookie saved previously by /setcookie endpoint

5.  /robots.txt	  GET	    Responds with a 403 status code and returns at http://httpbin.org/deny

6.  /html	        GET	    Responds with old age HTML page that works even in Windows NT 3.5

7.  /image	      GET	    Responds with Image page that works at http://localhost:8080/image.

8.  /input	      GET	    Responds with a HTML form that sends user entered data to POST /input

9.  /display	    POST	  Displays the data sent from GET /display to the browser as response and in the Console also
