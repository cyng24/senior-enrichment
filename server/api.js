'use strict'
const api = require('express').Router()
const db = require('../db')
const { Campus, Student } = require('../db/models');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

// GET api/campuses
api.get('/campuses', function (req, res, next) {
	Campus.findAll()
	  .then(campuses => res.json(campuses))
	  .catch(next);
  });
// GET /api/campuses/:campusId
api.get('/campuses/:campusId', function (req, res, next) {
  Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});
// GET /api/campuses/:campusId/students
api.get('/campuses/:campusId/students', function (req, res, next) {
  const campusId = req.params.campusId;

  Student.findAll({ where: { campusId } })
    .then(students => res.json(students))
    .catch(next);
});
// GET api/students
api.get('/students', function (req, res, next) {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});
// GET api/students/:studentId
api.get('/students/:id', function (req, res, next) {
  const id = req.params.id;
  Student.findById(req.params.id)
  .then(student => res.json(student))
  .catch(next);
})

// POST /api/students
api.post('/students', function (req, res, next) {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

// DELETE /api/students
api.delete('students/:id', function (req, res, next) {
  const id = req.params.id;
  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

api.use((req, res, next) => {
	res.status(404).send('Not found');
  });

module.exports = api