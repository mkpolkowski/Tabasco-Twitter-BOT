/**
 * Tabasco Twitter BOT
 * v1.00
 * Author: Mateusz Polkowski
 */

/***************************************************************************
 * setting up all dependencies and initilizing the bot
 ***************************************************************************/
// setup the twit package to control Twitter
var Twit = require('twit');
// connecting to a stand alone file with my tokens
var twtokens = require('./twtokens')
// connect to Twitter account using the tokens from the tokens.js file
var T = new Twit(twtokens);
// setting up a user stream (to watch for users performing actions on the account)
var stream = T.stream('user');
// activate the greetNewFollower function when someone follows the BOT
stream.on('follow', greetNewFollower);

// setup the moment.js package for time control
var moment = require('moment');
var timeStamp = moment().format('YYYY-MM-DD HH:mm:ss') + ' - ';

// telling console everything started
console.log(timeStamp + "Tabo twitter bot booted successfully!");

// run the national dog holiday function once a day at 8:00


/***************************************************************************
 * greets new follower
 ***************************************************************************/
function greetNewFollower(followerData) {
	// get the real name of the user that followed
	var name = followerData.source.name;
	// get the twitter handle of the user that followed
	var screenName = followerData.source.screen_name;
	// push to console who followed
	console.log(timeStamp + "Tabo has been followed by @" + screenName);
	// array of hello messages that can be used
	var helloMessages = [
		'Tabo macha ogonem, bo dostał śledzika od @' + screenName,
		'Tabo sika ze szczęścia, że śledzi go @' + screenName,
		'Tabo wylizał @' + screenName + ' za śledzika.',
		'Tabo szczeknął radośnie na powitanie @' + screenName,
		'Tabo domaga się podrapania po brzuchu od @' + screenName,
		'Tabo domaga się podrapania za uchem od @' + screenName
	];
	// pick a random hello message to use in the greeting
	var helloNumber = Math.floor(Math.random() * helloMessages.length);
	var randomHello = helloMessages[helloNumber];
	// post a tweent with a random hello message
	tweet(randomHello);
}



/***************************************************************************
 * informs of national dog holidays
 ***************************************************************************/
function dogHolidays() {
	// implement dog holidays

	// check current date in DD.MM format
	// check the first five characters of the string array for dates
	// if the date matches the current date check characters 7-10
	// if the year is not 0000 check the difference with current year and save the number of years
	// var ileLat = currentDate - array
	// tweet the string from character 12 to the end
}
/*
	var helloMessages = [
		'13.04.1985 Dzisiaj twórca bota kończy ' + ileLat + ' lat! Sto lat @mkpolkowski',
		'30.04.2009 Happy Birthday to ME! Dzisiaj kończę ' + ileLat + ' lat!',
		'08.03.0000 Dziś jest Ogólnopolski Dzień Sterylizacji Zwierząt!',
		'04.04.0000 Dziś jest Światowy Dzień Bezdomnych Zwierząt!',
		'27.04.0000 Dziś jest Światowy Dzień Lekarzy Weterynarii!',
		'22.05.0000 Dziś jest Ogólnopolski Dzień Praw Zwierząt ustanowiony przez Klub Gaja!',
		'15.06.0000 Dziś jest Ogólnopolski Dzień Dogoterapii',
		'01.07.0000 Dziś jest Światowy Dzień Psa!',
		'26.08.0000 Dziś jest Międzynarodowy Dzień Psa!',
		'28.09.0000 Dziś jest Światowy Dzień Walki ze Wścieklizną!',
		'04.10.0000 Dziś jest Światowy Dzień Dobroci dla Zwierząt!',
		'25.10.0000 Dziś jest Dzień Kundelka!'
	];
*/



/***************************************************************************
 * warns about not leaving your dog in the car during hot weather
 ***************************************************************************/
function carTempWarning() {
	// implement hot car warning
}
// connect weather website



/***************************************************************************
 * tweets interesting local news that are dog related
 ***************************************************************************/
function dogNews() {
	// implement dog news
}
// connect news headlines with BOT



/***************************************************************************
 * tweets interesting dog related facts from a psiefakty file
 ***************************************************************************/
function dogFacts() {
	// implement dog facts
}
// create event database psiefakty.txt



/***************************************************************************
 * autoposts a link to a new article on mkpolkowski.com/category/psy
 ***************************************************************************/
function autoPoster() {
	// implement autoposter
}
// connect to wordpress or RSS



/***************************************************************************
 * post a link to a random archived article on mkpolkowski.com/category/psy
 ***************************************************************************/
function randomPoster() {
	//implement randomposter
}



// a function that tweets tweetMsg
function tweet(tweetBody) {
	// tweet message
	var tweetMsg = {
		status: tweetBody
	}
	
	// post tweet message
	T.post('statuses/update', tweetMsg, tweetFeedback)
	
	// get feedback if everything is ok
	function tweetFeedback(err, data, response) {
		if (err) {
			console.log(timeStamp + "Tweet failed to send.");
		} else {
			console.log(timeStamp + "Tweeted: " + tweetBody);
		}
	}
}
