# Tempo Frontend challenge
  3 days

# Solution Improvement
  - Created a new search input component, apply use debounce to avoid to trigger the filter for every type, with that
    when we apply this search to the api it will not trigger a request every time.
  - Used the url search params to handle the search value and them capture this value in the place that its needed
    that way we can access a page filtered by the url.

### Describe what you have improved in the solution
  - Improved the folder structure to be easier to understand where everything are
  - Added React Query to handle the requests, that way we avoid the excessive use of the useState and useEffect and
    have a cache for the requests with the same query-key
  - Added a error boundaries component to handle the exceptions in the React life cycle and also a error page to improve
    the user experience when errors happens
  - Solved the loading use in some cases
  - Added better validations for types in some components

## To Run the project you must run:

```
npm install
```

## after the installation finished, you can run:

```
npm start
```

#### The project will open in your browser with the following url http://localhost:3000;

## To run the tests yo must run

```
npm run test
```