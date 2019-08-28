# Eat Da Burger

## Description
Eat Da Burger is a web application deployed with Heroku. Users are able to enter the names of burgers they'd like to eat which are then stored in a MySQL database and displayed in the 'Ready to Eat' section of the page using a Handlebars template. Each burger has a 'Devour It!' button which changes the status of the burger to devoured in the MySQL database and moves it to the 'Devoured' section of the page. 

## Organization
This application is organized using the Model-View-Controller (MVC) design pattern. An Object Relational Mapper (ORM) is defined with functions to handle the MySQL queries and the model further defines those functions specific to the Eat Da Burger application. The routing is defined in the controller and the functions are called as appropriate, once database data is gathered or altered, the view updates from the Handlebars template using a page reload. 

## Instructions
On home page load, the user is presented with any existing burgers in the MySQL database, non-devoured burgers in the 'Ready to Eat' section and devoured burgers in the 'Devoured' section. There is also a form to allow them to input the name of new burgers they'd like to eat. Once they hit submit, the new burger is added to the MySQL database as ready to eat and the page is reloaded so the burger is displayed in the appropriate section with a 'Devour It!' button. If the user clicks this button the devoured state for that burger is updated in the MySQL database and the page is reloaded showing the burger moved to the 'Devoured' section of the page. 


## Technologies Used
HTML
<br/>Handlebars
<br/>CSS
<br/>JavaScript
<br/>jQuery
<br/>MySQL
<br/>Node.js
<br/>Express
<br/>Heroku


**Node Packages:** 
<br/>express, express-handlebars, mysql

## Role
Sole developer with functionality requirements provided by UW Coding Bootcamp/Trilogy Education Services.

## link to deployed version