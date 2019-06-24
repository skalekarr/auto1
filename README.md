This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
Starts the FE and BE server.<br>
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.<br>

### `npm run coverage`
Runs test cases and calculates the coverage.<br>


## Tech-stack used
react - UI library
react-redux - for persisted UI state
redux-saga - for asynchronicity 
jest - tests

## Available Functionalities
filter color - filter available car list with color
filter manufacturer - filter available car list with manufacturer
sort - sort available car list with asc/desc with mileage
pagination - load items page wise
favourties - add/remove item from localStorage

## Notes
filter color/manufacturer - will reset the pagination to the first page
sort - will not reset the pagination to the first page. This can be achieved by sending the starting pageNumber