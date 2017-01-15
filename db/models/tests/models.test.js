var expect = require('chai').expect;
require('../../index');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var DBFixtures = require('./DBFixtures');

describe('Creating models', ()=> {
    let Course = mongoose.model('Course');
    let Student = mongoose.model('Student');
    let Schedule = mongoose.model('Schedule');
    let Enroll = mongoose.model('Enroll');
    let fixtures = new DBFixtures();
    before((done)=> {
        fixtures.clean()
            .then(()=>fixtures.createFixtures())
            .then(()=>done())
            .catch(done);
    });
    it('should create first course', ()=> {
        expect(fixtures.course._id).to.not.be.undefined;
    });
    it('should create student', ()=> {
        expect(fixtures.student._id).to.not.be.undefined;
    });
    it('should create schedule', ()=> {
        expect(fixtures.schedule._id).to.not.be.undefined;
    });

});