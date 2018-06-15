const slack = require('slack-notify')(process.env.SLACKHOOK);
const {channel, username, icon_url} = require('./config');

const slackLink = (text, url) => `<${url}|${text}>`;

const announce = (title, color = '#ffffff', fields = []) => {
	const payload = {
		channel, username, icon_url,
		attachments: [{
			pretext: title.includes('*') ? title : `*${title}*`,
			color,
			fields
		}]
	};

	console.log(`${title.padEnd(40)}${fields.map(f => (f.title + f.value).padEnd(25))}`);
	return slack.send(payload);
};

module.exports = {
	announce,
	slackLink
};
