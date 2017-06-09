const spawn = require('child_process').spawn;
const path = require('path');
const mongoose = require('mongoose');



export default (adr) => connect(adr);


async function connect(adr) {
	const mongo = await spawn('mongod',['--dbpath', path.resolve('.', 'db')])
	mongo.stdout.on('data', (data) => {
	  if(data.toString().match('waiting for connections on port 27017') !== null) {
	  	mongoose.connect(adr);
		const db = mongoose.connection;
		db.on('error', (err) => console.log(err));
		db.once('open', () => console.log('DB is connected!'));
		return db;
	  }
	});
	mongo.on('close', (code) => {
	  console.log(`child process exited with code ${code}`);
	});
}