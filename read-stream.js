const createReadStream = require('fs').createReadStream;
const createWriteStream = require('fs').createWriteStream;
const csvjson = require('csvjson');
const toObject = csvjson.stream.toObject();
const stringify = csvjson.stream.stringify(2);
createReadStream('./customer-data.csv', 'utf-8')
	.pipe(toObject)
	.pipe(stringify)
	.pipe(createWriteStream('./customer-data-solution.json'));
