# Project Name: Entnt Epr system assignment

## Overview

This project is a web application built using React.js for managing orders and products. It provides functionalities for managing orders, products, and viewing statistics via a dashboard.

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Access the application in your browser at `http://localhost:5173`.

## Getting Started

1. After setting up the project, navigate to the dashboard to view overall statistics.
2. Use the sidebar to navigate between different sections of the application.
3. Explore the Orders Management section to manage orders.
4. Explore the Products Management section to manage products.

## Dashboard

The dashboard provides the following statistics:

- Total Orders
- Orders Cancelled
- Orders Shipped
- Orders Pending
- Orders Delivered
- Total Products
![Dashboard](https://github.com/shaik11r/Project-Screenshots/blob/main/Screenshot%20(14).png)


## Orders Management

In the Orders Management section, you can:

- View a list of orders.
- Delete orders.
- Change the status of orders to Pending, Shipped, or Cancelled.
  
![Orders Management](https://github.com/shaik11r/Project-Screenshots/blob/main/Screenshot%20(16).png)


## Products Management

In the Products Management section, you can:

- Add new products.
- Delete existing products.
- Edit existing product details.
  
![Products Management](https://github.com/shaik11r/Project-Screenshots/blob/main/Screenshot%20(15).png)

## Calender view

In the calender view section you can look at the upcoming orders

![Screenshot 4](https://github.com/shaik11r/Project-Screenshots/blob/main/Screenshot%20(18).png)
*Screenshot 4: Calendar View*

## Folder Structure

- **assets**: Contains project assets like images.
- **components**: Contains React components.
  - **content**: Contains components related to content display.
  - **ContextApi**: Contains context API related components.
- **data**: Contains static data files.
- **reducers**: Contains Redux reducers.
- **store**: Contains Redux store configuration.

|   App.css
|   App.jsx
|   index.css
|   main.jsx
|   
+---assets
|       react.svg
|       
+---components
|   |   BodyContent.jsx
|   |   Navbar.jsx
|   |   SideBar.jsx
|   |   
|   +---content
|   |       DashBoard.jsx
|   |       OrdersCalender.jsx
|   |       OrdersManagement.jsx
|   |       ProductsMangement.jsx
|   |       
|   \---ContextApi
|           SidebarContext.jsx
|           
+---data
|       ordersData.js
|       productData.js
|       
+---reducers
|       ordersReducer.js
|       productReducer.js
|       
\---Store
        store.jsx
