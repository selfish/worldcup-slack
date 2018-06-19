const _ = require('lodash');
const announcers = require('./announcers');

class Match {
	constructor() {
		this.matchData = {
			home_team: {goals: 0},
			away_team: {goals: 0},
			home_team_events: [],
			away_team_events: []
		};
		this.live = false;
		this.announce = announcers;
	}

	async update(matchData) {
		const live = !['future', 'completed'].includes(matchData.status);

		if (live !== this.live) {
			if (live) {
				this.live = true;
				await this.announce.start(matchData);
			} else {
				this.live = false;
				await this.announce.end(matchData);
			}
		}

		if (matchData.home_team_events.length !== this.matchData.home_team_events.length ||
			matchData.away_team_events.length !== this.matchData.away_team_events.length) {
			await this.reportEvents(matchData);
		}

		if (matchData.home_team.goals !== this.matchData.home_team.goals ||
			matchData.away_team.goals !== this.matchData.away_team.goals) {
			await this.announce.vsScore(matchData);
		}

		this.matchData = matchData;
	}

	reportEvents(matchData) {
		_.orderBy(
			_.differenceBy(
				_.get(matchData, 'home_team_events', []),
				_.get(this, 'matchData.home_team_events', []),
				'time'), ['time'])
			.forEach(event => this.announce.event(event, _.get(matchData, 'home_team'), matchData));

		_.orderBy(
			_.get(matchData, 'away_team_events', []),
			_.get(this, 'matchData.away_team_events', []),
			'time', ['time'])
			.forEach(event => this.announce.event(event, _.get(matchData, 'away_team'), matchData));
	}
}

module.exports = Match;
