# Eat Da Burger
[View Live](https://nameless-taiga-35229.herokuapp.com/)

## Motivation 
To create a web application to display content from a MySQL database based on a boolean condition which will update on button press. Users should also be able to add new content. The user interface will be created using Handlebars templates and a custom ORM (Object Relational Mapper) will be used to simplify database interactions. 

## Summary
Eat Da Burger is a web application that displays lists of 'Ready to Eat' or 'Devoured' burgers to users from a MySQL database. They can then 'Devour' or add new burgers as desired. 

## Details
This application is organized using the Model-View-Controller (MVC) design pattern and deployed with Heroku. An Object Relational Mapper (ORM) is defined with functions to handle the MySQL queries and the model further defines those functions specific to the Eat Da Burger application. The routing is defined in the controller and the functions are called as appropriate, once database data is gathered or altered, the view updates from the Handlebars template using a page reload. On home page load, the user is presented with any existing burgers in the MySQL database, non-devoured burgers in the 'Ready to Eat' section and devoured burgers in the 'Devoured' section. There is also a form to allow them to input the name of new burgers they'd like to eat. Once they hit submit, the new burger is added to the MySQL database as 'Ready to Eat' and the page is reloaded so the burger is displayed in the appropriate section with a 'Devour It!' button. If the user clicks this button the devoured state for that burger is updated in the MySQL database and the page is reloaded showing the burger moved to the 'Devoured' section of the page.

## Role
Sole developer responsible for design, code and creation of custom graphics. Functionality requirements provided by UW Coding Bootcamp/Trilogy Education Services.

## Technologies
HTML
<br/>Handlebars
<br/>CSS
<br/>JavaScript
<br/>jQuery
<br/>MySQL
<br/>Node.js
<br/>Express
<br/>Heroku
<br/>**Node Packages:** 
<br/>express, express-handlebars, mysql
