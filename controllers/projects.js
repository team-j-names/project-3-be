const express = require('express');
const router = express.Router();
const { requireToken } = require('../middleware/auth')

// import project model
const Project = require('../models/project');

router.get('/', (req, res, next) => {
	Project.find({})
		.then((projects) => res.json(projects))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	Project.findById(id)
		.then((project) => res.json(project))
		.catch(next);
});

router.post('/', requireToken, (req, res, next) => {
	console.log(req.body)
	const owner = req.user._id
	Project.create({...req.body, owner})
		// .populate('owner')
		.then((project) => res.json(project))
		.catch(next);
});

router.put('/:id', requireToken, (req, res, next) => {
	const id = req.params.id;
	const updated = req.body;
	Project.findOneAndUpdate({ _id: id }, updated, { new: true })
		.then((project) => res.json(project))
		.catch(next);
});

router.delete('/:id', requireToken, (req, res, next) => {
	const id = req.params.id;
	Project.findByIdAndDelete(id)
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
