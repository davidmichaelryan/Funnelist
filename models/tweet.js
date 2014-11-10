var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TweetSchema = new Schema({
  listusername: String,
  listname: String,
  username: String,
  isretweetof: String,
  tweet: String, 
  tweetid: Number,
  tweeted_at: Date, 
  urls: Array, 
  mentions: Array, 
  favorites: Number, 
  retweets: Number
});

module.exports = mongoose.model('Tweet', TweetSchema);