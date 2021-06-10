const mongoose = require('./connection');

const Project = require('../models/project');
const projectseeds = require('./seeds.json');

Project.deleteMany({})
	.then(() => Project.insertMany(projectseeds))
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
