# Slack Worldcup Bot

Node JS worker to update a slack channel with live match details from the 2018 world cup

### Notifications:
- Match start
- Match end
- Score Change
- Match events (penalty, card, goal, ...)

### Reports:
Will report once a day on the following:
- Upcoming matches today
- Matches completed today (+scores)
- Matches coming tomorrow

## Deployment:

The bot includes a Heroku Procfile, usable with Heroku free tier (Hobby dev) Dynos. Note if you are running on Heroku you'll need to scale your web dyno to 0 (or it will crash because there isn't a web server connected to a port) and your worker dyno to 1 (to actually start the worker). 

You'll only have to do this after your first deploy:
```
heroku ps:scale web=0 worker=1
```

### Required environment variables:

`SLACKHOOK` - Slack webhook URL.

### Optional environment variables:

`TIMEZONE` - Your timezone for time reporting. (Ex: 'UTC', 'USA/Chicago', default: 'Asia/Jerusalem')

`BOT_NAME` - Bot name that should appear in slack (default: 'Cup Bot')

`BOT_ICON` - Icon URL for the bot to use in slack

`NODE_ENV` - If set to dev / development will start in dev mode, and post to dev channel

`DEBUG_CHANNEL` - Slack channel to post to in dev mode (default: #wc-debug)

`SLACK_CHANNEL` - Slack channel to post to in production mode (default: #worldcup)

## Contribution

Any and all contribution is more than welcome.
This was just a quick project, and there's a lot of room for improvement.

## Special thanks

A huge shout out to http://worldcup.sfg.io/ for the FIFA scraper ([estiens/world_cup_json](https://github.com/estiens/world_cup_json)), which he was quick to fix after the games started!

## WARNING

This was written in a rush the day World Cup in 2018 started. This is not good or proper code.
This project is based on a scraper, and scraping is inherently a messy and brittle procedural process.
My primary goal was the get something functional. Please do not use as an example of good Node.js code!
