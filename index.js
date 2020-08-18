var Twit = require('twit')
require('dotenv').config()
var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
})


function createStatus() {
  var startDate = new Date("08/10/2020");
  var currentDate = new Date();
  
  var diffTime = currentDate.getTime() - startDate.getTime();
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  
  return diffDays;
}
makePost = () => {
  var message = createStatus()
  T.post('statuses/update', { status: message }, (err, data, response) => {
    console.log(data)
  })
}
