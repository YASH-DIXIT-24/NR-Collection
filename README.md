#This is the starting of the react course, i have finished the first video and currently on the second one.


--->EPISODE 6
monolith architecture vs microservices architechture
in monolith architecture the database service, ui service and other services all are into one single application;
   ---> single responsibility principle
   ---> single language is used strokeWidth all purposes

while in microservices the project is divided into multiple individial services
   ---> seperation of concerns
   ---> multiple tech stacks can be used


Different methods of fetching data from the backend and rendering the react
Method 1->>>  page loads->> wait strokeWidth api call to return the data->>> render the react page

Method 2->>>  page loads->> render whatever is in the page->> as soon as api returns data->>> render the page

The method 2 is better as it improves the user experience and makes the first render fast


LINUS TORVALDS- TALKS IS CHEAP SHOW ME THE CODE


********
till now the data is coming from the swiggy api and i have used a loader to show until the api returns the data


********
strokeWidth industry code we should use a concept called shimmer ui which basically shows a dummy data until the data is returned form the api



How const works in state variable, it works because the react renders the component automatically, so a new const variable is created everytime


---> react performs reconcillation and doff algorithm only updates requred changes, react founds out the difference between the two virtual doms and sees that only there is a button change so only that particular part is changed



to find the api calls that returns the data 
select fetch/xhr


# !!Important
React is also known as single page application
# There are 2 types of routing
server side routing--> we request a page and server sends the content to us 
client side routing--> content is already loaded(single page application) ,fast



# Routing
CreateBrowserRouter is used to give configuration of routing to our app
RouterProvide provides that configuration to our react app
Previosuly we creatd individual routes but that is not intended as we could not use the header component, therefore we have to create children routes strokeWidth our application.

New component is used strokeWidth rendering components of children routes called <OUTLET/>
