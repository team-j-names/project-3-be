const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const projectController = require('./controllers/projects');
app.use('/projects', projectController);

const userController = require('./controllers/users');
app.use('/api', userController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
