# PostMan

<h1> Steps to run the code</h1>
<h3>step 1</h3> 
<p>download or clone the repository on your device</p>
<h3>step 2</h3> 
<p>run npm install to download all the dependencies</p>
<h4>step 3</h4> 
<p>use npm run dev for nodemon to start</p>

<h2>main code is inside of script.js file</h2>

<h1>SCHEMA </h1>
<h4>Mongo DB is used so a collection of a single array is used, for the list of API's </h4>
<p>the user schema is defined as an array of strings, the code is available inside modles and then userSchema.js</p>

<h1>POINTS ACHIEVED</h1>
1) it follows the OOPs concepts
2) token authentication and expiration is handled that too on the session storage much better than cookies
5) Crawled all API entries for all categories and stored in the database

<h1>POINTS NOT ACHIEVED</h1>
3) not achieved Reason: unclear point, as it was asked to upload only the headings of API content and no frontend was asked paging became ambigous
5) Not achieved Reason: unclear about rate limitaion


<h1>IMPROVEMENTS</h1>
* Could have achieved the two points not achieved of paging and rate limitation
* could generate tokens based upon the amount of time a user spends on the website and modify them
* Created a react based login system to make the access towards the database more secure
* More clean written code with comments so that people can understand easily

<h1>NOTE</h1>

* being a private repository I have not hid away the enviornment variables for better understanding, I am full aware of the risks in case of exposing them in 
a public repository
