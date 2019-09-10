### Contact

Hey, I'd like to use your TGTG API. Can you help me to know how to make it work please ?
I forked your repository, .env file is already added with : 
EMAIL=X
PASSWORD=X
LAT=X
LONG=X

I don't know yet how to get datas. 
For example, in your index.js, I don't understand how following lines work : 
 
const fetch = require("node-fetch");
require("dotenv").config();

console.log(process.env.EMAIL);
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const latitude = process.env.LAT;
const longitude = process.env.LONG;

=> node-fetch ?
=> dotenv.config ?
=> process ?

I'm available by mail here : sandstudio@gmail.com.
Thanks !

# tgtg_client
TooGoodToGo basic "API"

Trying to figure out when my favourite spots have stock available.
Add a .env file containing email, password, longitude, latitude
In the form KEY=value
