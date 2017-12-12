Task one

The first task as part of The Hasura Product Development Fellowship.

Installation

a) First, you are required to run NPM inside this project which can be achieved by doing this NPM

    $ npm install

b) Now, you can simply start the application by running this command 

    $ node

Endpoints

Each endpoint serves different uses. In the app.js each METHOD is grouped together.

    Endpoint  	    METHOD	    Description

    /	            GET         Returns the index page of the site at http://localhost:8080/
    

    /authors	    GET	        Fetches list of authors and posts from an API and prints a list
                                    of authors and the count of their posts.
                                

    /setcookie	    GET	        The server sets two cookies (name, age) which contains the name
                                    and age.
                                

    /getcookies	    GET	        Responds with the content took from the cookie saved previously
                                    by /setcookie endpoint.
                                

    /robots.txt	    GET	        Responds with a 403 status code and returns at 
                                    http://httpbin.org/deny
                                

    /html	            GET	        Responds with  HTML page that works even in Windows.

    /image	            GET	        Responds with Image page that works at 
                                    http://localhost:8080/image
                                

    /input	            GET	        Responds with a HTML form that sends user entered data to 
                                    POST /input
                                

    /display	    POST	    Displays the data sent from GET /display to the browser as 
                                  response and in the Console also
