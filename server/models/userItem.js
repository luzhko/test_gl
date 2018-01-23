var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserItem = new Schema({
    id: {
        type: Number,
        default: 0,
        required: true
    },
    first_name: {
        type: String,
        default: '',
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        default: '',
        trim: true
    },
    avatar: {
        type: String,
        default: '',
        trim: true
    }
});

module.exports = mongoose.model('UserItem', UserItem);


