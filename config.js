module.exports = {
	username: process.env.BOT_NAME || 'Cup Bot',
	icon_url: process.env.BOT_ICON,
	channel: process.env.NODE_ENV.includes('dev') ?
		(process.env.DEBUG_CHANNEL || '#wc-debug') :
		(process.env.SLACK_CHANNEL || '#worldcup'),
	timezone: process.env.TIMEZONE || 'Asia/Jerusalem',
	teams: {
		russia: {
			id: 1,
			country: 'Russia',
			fifa_code: 'RUS',
			group_id: 1,
			group_letter: 'A',
			color: '#d32e28'
		},
		'saudi arabia': {
			id: 2,
			country: 'Saudi Arabia',
			fifa_code: 'KSA',
			group_id: 1,
			group_letter: 'A',
			color: '#0b6b37'
		},
		egypt: {
			id: 3,
			country: 'Egypt',
			fifa_code: 'EGY',
			group_id: 1,
			group_letter: 'A',
			color: '#cc172d'
		},
		uruguay: {
			id: 4,
			country: 'Uruguay',
			fifa_code: 'URU',
			group_id: 1,
			group_letter: 'A',
			color: '#77abd9'
		},
		portugal: {
			id: 5,
			country: 'Portugal',
			fifa_code: 'POR',
			group_id: 2,
			group_letter: 'B',
			color: '#fc0d1c'
		},
		spain: {
			id: 6,
			country: 'Spain',
			fifa_code: 'ESP',
			group_id: 2,
			group_letter: 'B',
			color: '#c41126'
		},
		morocco: {
			id: 7,
			country: 'Morocco',
			fifa_code: 'MAR',
			group_id: 2,
			group_letter: 'B',
			color: '#bf2a32'
		},
		iran: {
			id: 8,
			country: 'Iran',
			fifa_code: 'IRN',
			group_id: 2,
			group_letter: 'B',
			color: '#149442'
		},
		france: {
			id: 9,
			country: 'France',
			fifa_code: 'FRA',
			group_id: 3,
			group_letter: 'C',
			color: '#042992'
		},
		australia: {
			id: 10,
			country: 'Australia',
			fifa_code: 'AUS',
			group_id: 3,
			group_letter: 'C',
			color: '#033739'
		},
		peru: {
			id: 11,
			country: 'Peru',
			fifa_code: 'PER',
			group_id: 3,
			group_letter: 'C',
			color: '#d7162b'
		},
		denmark: {
			id: 12,
			country: 'Denmark',
			fifa_code: 'DEN',
			group_id: 3,
			group_letter: 'C',
			color: '#c41335'
		},
		argentina: {
			id: 13,
			country: 'Argentina',
			fifa_code: 'ARG',
			group_id: 4,
			group_letter: 'D',
			color: '#77abd9'
		},
		iceland: {
			id: 14,
			country: 'Iceland',
			fifa_code: 'ISL',
			group_id: 4,
			group_letter: 'D',
			color: '#063b94'
		},
		croatia: {
			id: 15,
			country: 'Croatia',
			fifa_code: 'CRO',
			group_id: 4,
			group_letter: 'D',
			color: '#fc0d1c'
		},
		nigeria: {
			id: 16,
			country: 'Nigeria',
			fifa_code: 'NGA',
			group_id: 4,
			group_letter: 'D',
			color: '#2a3e3c'
		},
		brazil: {
			id: 17,
			country: 'Brazil',
			fifa_code: 'BRA',
			group_id: 5,
			group_letter: 'E',
			color: '#149442'
		},
		switzerland: {
			id: 18,
			country: 'Switzerland',
			fifa_code: 'SUI',
			group_id: 5,
			group_letter: 'E',
			color: '#fc0d1c'
		},
		'costa rica': {
			id: 19,
			country: 'Costa Rica',
			fifa_code: 'CRC',
			group_id: 5,
			group_letter: 'E',
			color: '#cc172d'
		},
		serbia: {
			id: 20,
			country: 'Serbia',
			fifa_code: 'SRB',
			group_id: 5,
			group_letter: 'E',
			color: '#c43840'
		},
		germany: {
			id: 21,
			country: 'Germany',
			fifa_code: 'GER',
			group_id: 6,
			group_letter: 'F',
			color: '#000000'
		},
		mexico: {
			id: 22,
			country: 'Mexico',
			fifa_code: 'MEX',
			group_id: 6,
			group_letter: 'F',
			color: '#0b6748'
		},
		sweden: {
			id: 23,
			country: 'Sweden',
			fifa_code: 'SWE',
			group_id: 6,
			group_letter: 'F',
			color: '#0f6ca6'
		},
		'korea republic': {
			id: 24,
			country: 'Korea Republic',
			fifa_code: 'KOR',
			group_id: 6,
			group_letter: 'F',
			color: '#c41335'
		},
		belgium: {
			id: 25,
			country: 'Belgium',
			fifa_code: 'BEL',
			group_id: 7,
			group_letter: 'G',
			color: '#ed3645'
		},
		panama: {
			id: 26,
			country: 'Panama',
			fifa_code: 'PAN',
			group_id: 7,
			group_letter: 'G',
			color: '#d01739'
		},
		tunisia: {
			id: 27,
			country: 'Tunisia',
			fifa_code: 'TUN',
			group_id: 7,
			group_letter: 'G',
			color: '#e50b21'
		},
		england: {
			id: 28,
			country: 'England',
			fifa_code: 'ENG',
			group_id: 7,
			group_letter: 'G',
			color: '#cd0f27'
		},
		poland: {
			id: 29,
			country: 'Poland',
			fifa_code: 'POL',
			group_id: 8,
			group_letter: 'H',
			color: '#da1b40'
		},
		senegal: {
			id: 30,
			country: 'Senegal',
			fifa_code: 'Sen',
			group_id: 8,
			group_letter: 'H',
			color: '#108442'
		},
		columbia: {
			id: 31,
			country: 'Columbia',
			fifa_code: 'COL',
			group_id: 8,
			group_letter: 'H',
			color: '#fdcb32'
		},
		japan: {
			id: 32,
			country: 'Japan',
			fifa_code: 'JPN',
			group_id: 8,
			group_letter: 'H',
			color: '#103b5d'
		}
	}
};
