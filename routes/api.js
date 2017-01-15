var express = require('express');
var router = express.Router();
var CourseController = require('../controllers/CourseController');
var courseController = new CourseController();
const COURSES = '/courses';

router.get('/', function (req, res) {
    res.json({
        api: '1.0.0'
    });
});

router.get(COURSES, courseController.list);
router.post(COURSES, courseController.create);
router.get(`${COURSES}/:id`, courseController.read);
router.put(`${COURSES}/:id`, courseController.update);
router.delete(`${COURSES}/:id`, courseController.delete);
module.exports = router;