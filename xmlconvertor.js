var xml2js = require('xml2js');
var fs = require('fs');
var parser = new xml2js.Parser({ mergeAttrs: true });
var inputFile = process.argv[2];
var outputFile = process.argv[3];

/*
console.log(fs.readFileSync(inputFile, 'utf-8'));
console.log(fs.statSync(inputFile));
*/

fs.readFile(inputFile, 'utf-8', function (err, contents) {
	parser.on('end', function (result) {
			if (result.status === 'error') {
				callback(result.error);
			}
			else {
				
				fs.writeFile(outputFile, JSON.stringify(result), 'utf-8', function (err) {
					if (err) {
						console.error(err);
						process.exit(666);
					}
					
					console.log('WOOHOO!');
					process.exit(0);
				})
			}
	});

	parser.parseString(contents);
	
});
