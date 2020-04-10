const csvjson = require('csvjson');
const readFile = require('fs').readFile;
readFile('./customer-data.csv', 'utf-8', (err, fileContent) => {
	if (err) {
		console.log(err); // Do something to handle the error or just throw it
		throw new Error(err);
	}
	const jsonObj = csvjson.toObject(fileContent);

	// iterates over array elements
	//for (let result of jsonObj) {
	console.log(jsonObj);
});
