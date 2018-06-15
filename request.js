const _ = require('lodash');
const got = require('got');

async function get(path) {
	const response = await got(
		'http://' + ('worldcup.sfg.io/' + path).replace(/\/+/g, '/'),
		{retries: 2, json: true}
	);
	return _.get(response, 'body', []);
}

module.exports = {
	get
};
