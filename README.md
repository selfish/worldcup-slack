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

The bot includes a Heroku Procfile, usable with Heroku free tier (Hobby dev) Dynos.

### Required environment variables:

`SLACKHOOK` - Slack webhook URL.

### Required environment variables:

`BOT_NAME` - Bot name that should appear in slack (default: Cup Bot). 
`BOT_ICON` - Icon URL for the bot to use in slack.
`NODE_ENV` - If set to dev / development will start in dev mode, and post to dev channel.
`DEBUG_CHANNEL` - Slack channel to post to in dev mode
`SLACK_CHANNEL` - Slack channel to post to in production mode