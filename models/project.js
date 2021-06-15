const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
	{
		title: { type: String, required: true },
		author: String,
		links: String,
		githubUrl: String,
		deployedUrl: String,
		description: { type: String, required: true },
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
