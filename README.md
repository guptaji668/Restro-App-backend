Backend for Resto-App 

This is the backend of the Food Ordering System, built using Node.js and Sequelize and Postgresql for database management.

Setup Instructions

Step 1: Install Dependencies
Run the following command to install all required dependencies:
npm i

Step 2: Start the Development Server
Use the following command to start the development server:
npm run dev

Step 3: Sync the Database
To properly sync the database, follow these steps:
Open the app.js file.
Locate the line where sequelize.sync() is commented out and uncomment it to sync the database schema to your machine.
Sync the individual tables in the following order:
Uncomment Users.sync() to sync the user_database table.
Uncomment MenuItems.sync() to sync the menu_item_database table.
Uncomment Orders.sync() to sync the orders_database table.

Step 4: Insert Static Data
After all the tables are synced:
Uncomment the line import("./modal/begin/") in app.js to create some static data in the menu_item_database table.
Run the server to insert the static data.

Endpoint
(http://localhost:5000/register/user) // for register user api //post method
(http://localhost:5000/login/user) // for login user api  // post method
(http://localhost:5000/menu/items) // for fetch the menu items // GET method
(http://localhost:5000/order/place) // for order placed api //post 
(http://localhost:5000/order//history/:userId) // for order-history for the user api // get method


Notes
Ensure that the database is correctly configured in your Sequelize setup.
If any errors occur, check the logs and ensure all required dependencies are installed.



