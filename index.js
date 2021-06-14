const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const requestLogger = require('./middleware/request_logger');
app.use(requestLogger);

const projectController = require('./controllers/projects');
app.use('/projects', projectController);

const userController = require('./controllers/users');
app.use('/api', userController);

const { handleErrors } = require('./middleware/custom_errors');
app.use(handleErrors);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
