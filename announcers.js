const _ = require('lodash');
const moment = require('moment-timezone');
const {get} = require('./request');
const {teams, timezone} = require('./config');
const {vs, vsScore, score} = require('./format');
const {announce, slackLink} = require('./slack');

const announceMatchStart = matchData => announce(`Game starts: ${vs(matchData)} (${_.get(matchData, 'location')}) - ${slackLink('Watch Live', 'https://www.kan.org.il/fifaworldcup/matches/')}`);
const announceMatchComplete = matchData => announce(`Game ended: ${vsScore(matchData)} (${_.get(matchData, 'location')}) - ${slackLink('Watch Replay', 'https://www.kan.org.il/fifaworldcup/matches/')}`);
const announceScore = matchData => announce(`Score update: ${vsScore(matchData)}`);

const events = {
	'goal': 'Goal!',
	'goal-own': 'Own goal!',
	'goal-penalty': 'Penalty!'
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
		{short: true, title: 'Current vsScore:', value: vsScore(matchData)},
		{short: true, title: 'Time:', value: time}

	];

	return announce(title, color, fields);
};

const todayUpcoming = async () => {
	const matches = await get('/matches/today');
	const fields = matches.map(m => ({
		short: false,
		title: vs(m),
		value: moment(m.datetime).tz(timezone).format('HH:mm (z)')
	}));
	return announce('Upcoming Matches today:', null, fields);
};

const todaySummary = async () => {
	const matchesToday = await get('/matches/today');
	const fieldsToday = matchesToday.map(m => ({
		short: false,
		title: vs(m),
		value: score(m)
	}));
	await announce('Matches played today:', null, fieldsToday);

	const matchesTomorrow = await get('/matches/tomorrow');
	const fieldsTomorrow = matchesTomorrow.map(m => ({
		short: false,
		title: vs(m),
		value: moment(m.datetime).tz('Asia/Jerusalem').format('HH:mm (z)')
	}));
	return announce('Upcoming Matches tomorrow:', null, fieldsTomorrow);
};

module.exports = {
	start: announceMatchStart,
	end: announceMatchComplete,
	vsScore: announceScore,
	event: announceEvent,
	todayUpcoming,
	todaySummary
};
