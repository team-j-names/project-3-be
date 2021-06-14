const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
	{
		title: String,
		author: String,
		links: String,
		githubURL: String,
		deployedURL: String,
		description: String,
		likes: Number,
		technologies: String,
		imageUrl: String,
	},
	{
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user',
			required: true,
		},
	}
);

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
