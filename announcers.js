const _ = require('lodash');
const {get} = require('./request');
const {teams} = require('./config');
const {vs, vsTime, score} = require('./format');
const {announce, slackLink} = require('./slack');

const announceMatchStart = matchData => announce(`Game starts: ${vs(matchData)} (${_.get(matchData, 'location')}) - ${slackLink('Watch Live', 'https://www.kan.org.il/fifaworldcup/matches/')}`);
const announceMatchComplete = matchData => announce(`Game ended: ${score(matchData)} (${_.get(matchData, 'location')}) - ${slackLink('Watch Replay', 'https://www.kan.org.il/fifaworldcup/matches/')}`);
const announceScore = matchData => announce(`Score update: ${score(matchData)}`);

const events = {
	goal: 'Goal!',
	'goal-own': 'Own goal!'
};

const announceEvent = (event, team, matchData) => {
	const type = _.get(event, 'type_of_event', 'Unknown event');
	const name = events[type] || type.replace(/^[a-z]/, c => c.toUpperCase()).replace(/-/g, ' ');

	const title = `${name}${name.includes('!') ? '' : ':'}`;

	const country = _.get(team, 'country');
	const player = _.get(event, 'player');
	const time = `${_.get(event, 'time')}`;

	const color = _.get(teams, `${country.toLowerCase()}.color`);

	const fields = [
		{short: true, title: 'Team:', value: country},
		{short: true, title: 'Player:', value: player},
		{short: true, title: 'Current score:', value: score(matchData)},
		{short: true, title: 'Time:', value: time}

	];

	return announce(title, color, fields);
};

const todayUpcoming = async () => {
	const matches = await get('/matches/today');
	const lines = '```\n    ' + matches.map(vsTime).join('\n    ') + '\n```';
	return announce('*Upcoming Matches today:*\n' + lines);
};

const todaySummary = async () => {
	const matchesToday = await get('/matches/today');
	const linesToday = '```\n    ' + matchesToday.map(score).join('\n    ') + '\n```';
	await announce('*Matches played today:*\n' + linesToday);

	const matchesTomorrow = await get('/matches/tomorrow');
	const linesTomorrow = '```\n    ' + matchesTomorrow.map(vsTime).join('\n    ') + '\n```';
	return announce('*Upcoming Matches tomorrow:*\n' + linesTomorrow);
};

module.exports = {
	start: announceMatchStart,
	end: announceMatchComplete,
	score: announceScore,
	event: announceEvent,
	todayUpcoming,
	todaySummary
};
