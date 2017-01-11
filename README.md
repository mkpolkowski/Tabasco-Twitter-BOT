# Tabasco Twitter BOT
A dog Twitter BOT that will inform dog owners in Warsaw Poland about dog related things.

You can find the bot here [@piestabo](https://twitter.com/piestabo).

## Overview
I wanted to create a dog Twitter BOT that will do the following things:
- Greet new followers with funny dog related texts. (tail wagging user shoutouts)
- Inform followers about polish national dog days. (an array of events that are posted on specific days)
- Inform followers not to leave their dogs in the car if the weather forecast in Warsaw is over a specific threshold. (extract weather forecast, check against a safe temperature and warn if temperature is over the threshold)
- Inform followers about positive dog related news from Poland and the world. (extract dog related news that are not bite related and post links to relevant articles)
- Post some random dog facts.
- Post new dog related articles from [my blog](http://www.mkpolkowski.com/category/psy/).
- Post random archived dog related articles from [my blog](http://www.mkpolkowski.com/category/psy/). (shameless plug, but hey, this is my dog's profile picture after all)

The BOT uses node.js and:
- [Twit](https://github.com/ttezel/twit) (for Twitter)
- [moment.js](http://momentjs.com/) (dates and time)
- ??? (for Weather)
- ??? (for News)
- ??? (for WordPress)

## To do
- Tweet about national dog days
- Don't leave your dog in the car warning
  - Connect weather website
  - Implement hotdog
- Dog news
  - Connect news headlines with BOT
  - Implement dog news
- Dog facts
  - Create fact database 
  - Implement dog facts
- Autoposter for blog
  - Connect to wordpress 
- Random dog blog post

## Done
- Got Twit working.
- Got greeting new followers with funny tweets working.
- Got moment.js working.
