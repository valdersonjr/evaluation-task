# Project Setup Guide

This guide will help you run the project by setting up the backend, frontend, and a PostgreSQL database.

## Backend

1. Navigate to the `backend` folder.
    ```bash
    cd backend
    ```

2. Install the required dependencies.
    ```bash
    npm install
    ```

3. Set up a PostgreSQL database:
    - Ensure you have PostgreSQL installed on your local machine.
    - Create a new PostgreSQL database and note down the credentials (e.g., host, port, username, password, database name).

4. Configure the PostgreSQL database:
    - In the `backend/db/connect.js` file, find and edit the database configuration.
    - Update the configuration settings for the PostgreSQL database using the credentials obtained in step 3.

5. Start the backend server.
    ```bash
    npm start
    ```

The backend server should now be running.

## Frontend

1. Navigate to the `frontend` folder.
    ```bash
    cd frontend
    ```

2. Install the required dependencies.
    ```bash
    npm install
    ```

3. Start the frontend development server.
    ```bash
    npm run dev
    ```

The frontend development server should now be running.

Open your web browser and navigate to the appropriate URLs to access the application.

For backend: `http://localhost:3001`
For frontend: `http://localhost:3000`

## Test the application

1. Acess the frontend url in your browser, fill out the fields and submit.

2. Also you can get a list of your created cards with `http://localhost:3001/card` or create a new one with `http://localhost:3001/card/add`