1.	How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
    
  I spent 4-5 Hours for the assignment. If I had more time I would have used CSS to make the application more neater. Right now, it is only a functioning application.
  Also, I would add heroku oAuth token to the app to avoid CORS problem.

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

    I used static getDerivedStatefromProps functionlaity that was added in react last year. 
     ```
    static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.listOfRestaurants !== prevState.listOfRestaurants) {
        return {
          list: nextProps.listOfRestaurants,
        };
      }
      return null;
    }
    ```
3.	How would you track down a performance issue in production? Have you ever had to do this?

  One way to test performance can be to test the server by making multiple api calls to the server and see how it responds. 
  Another way to imporve performance is to use debouncing in the search input and directly using to filter the input.
    
4.	How would you improve the API that you just used?

There can be times when the load is very high, caching can help us. Based on the user's location we can cache the local city restaurants . 

5.	Please describe yourself using JSON.

{
"name": "Madhav",
"lastname": "Peri",
"age": 28,
"nationality": "India",
"livesin": "Austin",
"passions": [
"Programming",
"Photography",
"Soccer"
],


"dreams": [
"To learn from my mistakes and be a better person!"
],

}
