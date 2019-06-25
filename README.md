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
react - UI library <br>
react-redux - for persisted UI state <br>
redux-saga - for asynchronicity <br>
jest - tests <br>

## Available Functionalities
filter color - filter available car list with color <br>
filter manufacturer - filter available car list with manufacturer <br>
sort - sort available car list with asc/desc with mileage <br>
pagination - load items page wise <br>
favourties - add/remove item from localStorage <br>

## Notes
filter color/manufacturer - will reset the pagination to the first page <br>
sort - will reset the pagination to the first page. <br>
security vulnerabilities in the dependencies is due to the mock server <br>
Need internet connection to download the bootstrap styles