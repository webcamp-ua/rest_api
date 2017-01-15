var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let Course = mongoose.model('Course');
let Student = mongoose.model('Student');
let Schedule = mongoose.model('Schedule');
let Enroll = mongoose.model('Enroll');
class DBFixtures {
    constructor() {
        this.course = {
            "name": "javascript DOM",
            "alias": "js_dom",
            "metadesc": "",
            "description": "",
            "results": [],
            "duration": 40,
            "track": 1,
            "level": 1,
            "requirements": [],
            "intro_video": ""
        };
        this.student = {name: "Test", email: "rest_student@mailinator.com"};
        this.schedule = {start: new Date(), days: [6, 0], price: 42};
    }

    createCourse() {
        return Course.create(this.course).then((course)=> {
            this.course = course;
            return course;
        });
    }

    createSchedule() {
        return Schedule.create(this.schedule).then((schedule)=> {
            this.schedule = schedule;
            return schedule;
        });
    }

    createStudent() {
        return Student.create(this.student).then((student)=> {
            this.student = student;
            return student;
        });
    }

    createFixtures() {
        return this.createCourse()
            .then(course=> {
                this.schedule.courseId = course._id;
                return this.createSchedule();
            })
            .then(()=>this.createStudent());
    }

    clean() {

        return Promise.all([Course.remove({}).exec(),
            Student.remove({}).exec(),
            Schedule.remove({}).exec(),
            Enroll.remove({}).exec()]);

    }
}

module.exports = DBFixtures;