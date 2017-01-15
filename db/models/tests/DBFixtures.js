var mongoose = require('mongoose');
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
            "intro_video": ''
        };
    }

    clean(done){
        let Course = mongoose.model('Course');
        Course.remove({}, done);
    }
}

module.exports = DBFixtures;