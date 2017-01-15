var expect = require('chai').expect;
require('../../index');
var mongoose = require('mongoose');
var DBFixtures = require('./DBFixtures');

describe('Creating models', ()=> {
    let Course = mongoose.model('Course');
    let fixtures = new DBFixtures();
    before((done)=> {
        fixtures.clean(done);
    });
    it('should create first course', (done)=> {
        Course.create(fixtures.course, (err, course)=> {
            expect(course).to.not.be.undefined;
            done(err);
        });
    });
});