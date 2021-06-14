const express = require('express');
const router = express.Router();

// import project model
const Project = require('../models/project');
// GET all projects
router.get('/', (req, res, next) => {
	Project.find({})
		.then((projects) => res.json(projects))
		.catch(next);
});
// GET a project
router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	Project.findById(id)
		.then((project) => res.json(project))
		.catch(next);
});
// POST a project
router.post('/', (req, res, next) => {
	Project.create(req.body)
		.then((project) => res.json(project))
		.catch(next);
});
// PUT a project
router.put('/:id', (req, res, next) => {
	const id = req.params.id;
	const updated = req.body;
	Project.findOneAndUpdate({ _id: id }, req.body, { new: true })
		.then((project) => res.json(project))
		.catch(next);
});

// DELETE a project
router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Project.findByIdAndDelete(id)
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
