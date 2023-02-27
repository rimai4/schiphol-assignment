# Setup

- Clone this repository
- Run `yarn`
- Run `yarn dev` and access the development server on port 5173

## Server

The `flights.json` file is served by the development server from Vite.
To simulate a real request, a timeout of 400ms is added.

To prevent fetching the data on every keystroke, a debounce effect is added
so that the request is only performed if the user stopped typing for 150ms.

## Test

A test is added to check the full behavior of the app. This includes
testing that the data is returned after entering 3 characters or more
and that the data is returned in the correct order.
