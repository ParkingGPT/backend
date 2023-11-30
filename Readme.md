# INRIX_Hack_Client_Server_Demo
This repository will guide you through the process of creating a ExpressJS server/backend app, developing APIs, setting up a frontend Vanilla JavaScript application, and making a simple API call. The goal is to demonstrate how to seamlessly integrate and exchange data between the frontend and backend applications.


# Client Server ExpressJS App - INRIX HACK 2023

## Overview
This repository contains the source code for a ExpressJS web application developed for INRIX HACK 2023. The application serves as a client-server demo example to help you get started with client-server interactions using ExpressJS and Bootstrap.

## Links
If you wish to see an Flask - Python example for the same project goto: [FLask Python code example](https://github.com/INRIX-Aashay-Motiwala/INRIX_Hack_Client_Server_Demo)

## Features
- **Home Page**: A simple home page with Bootstrap styling.
- You can click the GetToken button in the navbar after hosting this app locally to print the token on the html page
- **GetToken Endpoint**: Access the `/getToken` endpoint to receive a JSON response with the Auth Token.
  

## Prerequisites
- npm & Node

## Setup Instructions

1. **Clone the Repository:**
    ```bash
    git clone git@github.com:<YOUR USER NAME>/INRIX_Hack_Client_Server_ExpressJS_Demo.git
    cd INRIX_Hack_Client_Server_Demo
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```
3. ** !! Make sure to paste your INRIX App_Id and Hash_Token here [utils/authUtils.js](https://github.com/INRIX-Aashay-Motiwala/INRIX_Hack_Client_Server_ExpressJS_Demo/blob/7d80f9365697f304d94968919f1ff3fae205161f/utils/authUtils.js#L5)   

## Running the Application

1. **Start the Express App:**
    ```bash
    node main.js
    ```
    Make sure to be in the same directory where you have your main.py file

2. **Access the App:**
    Open your web browser and go to [http://127.0.0.1:5000/](http://127.0.0.1:5000/)

3. **Explore the App:**
    - Click on the "GetToken" link in the navigation bar to fetch and display the API token dynamically.
    
## File Structure
- **main.py:** ExpressJS application script.
- **views/:** HTML templates for the web pages.
- **public/:** Static files (CSS, JS).
---

**Happy Hacking!**
