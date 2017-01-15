var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Course = mongoose.model('Course');
class CourseController {

    list(req, res, next) {
        Course.find({})
            .exec()
            .then(courses=>res.json(courses))
            .catch(err=>next(err));
    }

    create(req, res, next) {
        Course.create(req.body)
            .then(courses=>res.json(courses))
            .catch(err=>next(err));
    }

    read(req, res, next) {
        Course.findById(req.params.id)
            .exec()
            .then(courses=>res.json(courses))
            .catch(err=>next(err));
    }

    update(req, res, next) {
        Course.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .exec()
            .then(courses=>res.json(courses))
            .catch(err=>next(err));
    }

    delete(req, res, next) {
        Course.findByIdAndRemove(req.params.id)
            .exec()
            .then(courses=>res.json(courses))
            .catch(err=>next(err));
    }
}

module.exports = CourseController;