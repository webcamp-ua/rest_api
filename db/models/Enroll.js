var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EnrollSchema = new Schema({
    courseId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    scheduleId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    studentId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    bill: {
        type: String
    }
});

mongoose.model('Enroll', EnrollSchema);