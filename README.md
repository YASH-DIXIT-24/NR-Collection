#This is the starting of the react course, i have finished the first video and currently on the second one.


--->EPISODE 6
monolith architecture vs microservices architechture
in monolith architecture the database service, ui service and other services all are into one single application;
   ---> single responsibility principle
   ---> single language is used for all purposes

while in microservices the project is divided into multiple individial services
   ---> seperation of concerns
   ---> multiple tech stacks can be used


Different methods of fetching data from the backend and rendering the react
Method 1->>>  page loads->> wait for api call to return the data->>> render the react page

Method 2->>>  page loads->> render whatever is in the page->> as soon as api returns data->>> render the page

The method 2 is better as it improves the user experience and makes the first render fast


LINUS TORVALDS- TALKS IS CHEAP SHOW ME THE CODE


********
till now the data is coming from the swiggy api and i have used a loader to show until the api returns the data


********
for industry code we should use a concept called shimmer ui which basically shows a dummy data until the data is returned form the api