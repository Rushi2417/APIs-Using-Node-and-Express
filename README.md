# API Usage with Express and Node.js

This repository contains two small projects demonstrating the usage of APIs with Express and Node.js. Below are the details of each project along with instructions on how to set them up and run.

## What I Learned

In this project, I learned:

- How to use APIs with Express and Node.js.
- Understanding of endpoints, paths, parameters, and authentication.
- Utilizing Postman for API testing.
- Handling JSON data.
- Making GET requests with the Node.js HTTPS module.
- Understanding status codes.

## Projects

### 1. Simple Newsletter Signup

This project allows users to sign up for a newsletter using the Mailchimp API. Users can enter their name and email, and the information will be saved using the Mailchimp API.

### 2. Weather Prediction for any City

This project utilizes the OpenWeatherMap API to provide live weather information for any city. Users can enter the name of a city, and they will receive information about the current weather conditions.

## Getting Started

Follow the instructions below to set up and run the projects on your local machine:

1. Clone this repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install the dependencies using npm:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory of each project to store your API keys and other sensitive information. An example `.env` file for each project is provided as `.env.example`.

5. Replace the placeholder API keys and other variables in the `.env` files with your actual API keys and configurations.

6. Start the server for each project:

    ```bash
    node app.js
    ```

## Endpoints

### Simple Newsletter Signup

- **POST /signup**
  - Description: Allows users to sign up for the newsletter.
  - Parameters:
    - Name: FirstName and LastName
    - Email: User's email address
  - Response:
    - Status Code 200: Successful signup
    - Status Code 400: Bad request (invalid parameters)

### Weather Prediction for any City

- **GET /weather**
  - Description: Retrieves live weather information for a specific city.
  - Parameters:
    - City: Name of the city for which weather information is requested
  - Authentication: No authentication required
  - Response:
    - Status Code 200: Successful retrieval
    - Status Code 404: City not found
    - Status Code 500: Internal server error


## JSON Responses

Both projects return JSON responses with relevant data. Ensure that your client-side application is capable of parsing JSON responses.

## Status Codes

The server returns appropriate status codes to indicate the success or failure of the requests. Refer to the endpoint descriptions above for details on the status codes returned by each endpoint.

Feel free to reach out if you have any questions or encounter any issues while setting up or running the projects. Happy coding! 🚀
