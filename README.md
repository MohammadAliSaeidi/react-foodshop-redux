# Online Food Shop (Pizza) - Redux Practice Project

## Overview
The Online Food Shop - Pizza App is a React-based project designed to simulate an online food ordering system for pizzas. It serves as a practical exercise to enhance proficiency in React, Redux, and Redux Toolkit while creating an interactive user interface. The application fetches fake data using Axios from a JSON Server and utilizes various tools and technologies to deliver a seamless experience.

### You can see a sample of the website in the video:
https://github.com/MohammadAliSaeidi/react-foodshop-redux/assets/70700922/7c54af8e-6675-43ae-941a-da506d0e05f9.mp4

## Tools and Packages

The project incorporates several tools and packages, including:

- Node.js v18.16.1
- Yarn v1.22.19
- React v18.2.0
- Redux v4.2.1
- Redux Toolkit v1.9.5
- Axios v1.4.0
- JSON Server v0.17.3

Additional packages utilized in this project include:

- React Redux v8.1.1
- Redux Logger v3.0.6
- Redux Thunk v2.4.2
- Swiper v9.4.1
- React Icons v4.9.0
- Web Vitals v2.1.0

## Features
The Online Food Shop - Pizza App includes the following features:

- **Browse and Add to Cart**: Users can explore the menu and add desired pizza items to the cart.
- **Adjust Quantity**: Users have the flexibility to increase or decrease the number of pizza items in the cart.
- **Remove from Cart**: Users can remove specific pizza items from the cart altogether.

## Usage
To run the application locally, follow these steps:
1. Start the JSON Server by running `yarn json-server` in your terminal.
2. Once the JSON Server is running, start the development server by running `yarn start` in a separate terminal.
3. Access the application in your web browser at `http://localhost:3000`.
4. Browse the menu, add pizzas to the cart, and manipulate the cart items as desired.

Please ensure that you start the JSON Server before starting the development server to ensure proper data availability.

## WebService.js

The `WebService.js` module is responsible for interacting with the server using Axios. It creates an Axios instance with the base URL of `'http://localhost:3001'` and provides the following methods:

- **`GetMenuData()`**: Retrieves an array of menu data containing information about each item in the menu, such as names, prices, descriptions, etc.
- **`GetCartOrders()`**: Retrieves all orders in the user's cart (cart items).
- **`GetMenuProductById(id)`**: Retrieves a menu product by its `id`.
- **`IncreaseOrderQuantity(id)`**: Increases the quantity of the order in the cart specified by its `id`.
- **`DecreaseOrderQuantity(id)`**: Decreases the quantity of the order in the cart specified by its `id`.
- **`RemoveOrderFromCart(id)`**: Removes an order from the cart specified by its `id`.
- **`AddOrderToCart(id)`**: Adds an order to the cart specified by its `id`.
## Redux
### cart slice
The `cartSlice.js` file manages the state of the shopping cart. It includes reducer functions for adding, removing, increasing, decreasing quantities, and clearing the cart. The initial state consists of an array of `cartOrders` (cart items) and a `total` value.

## Feedback and Contributions

Feedback, suggestions, and contributions to this project are highly appreciated. If you encounter any issues or have ideas to enhance the application, please feel free to open an issue or submit a pull request on the GitHub repository.
