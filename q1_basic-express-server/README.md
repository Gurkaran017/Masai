# Basic Express Server

## Objective
A simple Express.js server with three routes and error handling.

## Routes

- `GET /home`  
  Returns HTML response: `Welcome to Home Page`.

- `GET /aboutus`  
  Returns JSON: `{ "message": "Welcome to About Us" }`.

- `GET /contactus`  
  Returns dummy contact details in JSON format.

- Any other route  
  Returns: `404 Not Found`.

## Setup & Run

1. Clone the repo or download the files.
2. Run:
   ```bash
   npm install
   node server.js
