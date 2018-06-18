const {job} = require('cron');
const {get} = require('./request');
const {vs} = require('./format');
const {todayUpcoming, todaySummary} = require('./announcers');
const Match = require('./match');

const active = {};

const update = async () => {
	console.log('Update start');
	const matches = await get('/matches/today');

	matches
		.filter(matchData => matchData.status !== 'future')
		.forEach(matchData => {
			let current;
			if (matchData.status !== 'completed') {
				console.log(`Match ongoing: ${vs(matchData)}`);
				active[matchData.datetime] = active[matchData.datetime] || new Match();
				current = active[matchData.datetime];
			} else if (active[matchData.datetime]) {
				console.log(`Match complete! ${vs(matchData)}`);
				current = active[matchData.datetime];
				delete active[matchData.datetime];
			}
			if (current) {
				current.update(matchData);
			}
		});
};

job('*/30 * * * * *', update, null, true, 'UTC');
job('0 0 7 * * *', todayUpcoming, null, true, 'UTC');
job('0 0 20 * * *', todaySummary, null, true, 'UTC');
