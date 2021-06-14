const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	title: String,
	description: String,
	author: String,
	links: String,
	Github: String,
	Heroku: String,
	imageURL: String,
	technologies: String,
	likes: Number
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
