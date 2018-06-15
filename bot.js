const {job} = require('cron');
const {get} = require('./request');
const {vs} = require('./format');
const {todayUpcoming, todaySummary} = require('./announcers');
const Match = require('./match');

const active = {};

const update = async () => {
	console.log('Update start');
	const matches = await get('/matches');

	matches
		.filter(matchData => matchData.status !== 'future')
		.forEach(matchData => {
			if (matchData.status !== 'completed') {
				console.log(`Match ongoing: ${vs(matchData)}`);
				active[matchData.datetime] = active[matchData.datetime] || new Match();
			} else if (active[matchData.datetime]) {
				console.log(`Match complete! ${vs(matchData)}`);
			}
			const current = active[matchData.datetime];
			if (current) {
				current.update(matchData);
			}
		});
};

job('*/10 * * * * *', update, null, true, 'UTC');
job('0 0 9 * * *', todayUpcoming, null, true, 'UTC');
job('0 0 23 * * *', todaySummary, null, true, 'UTC');
