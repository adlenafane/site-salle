'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Post Schema
 */
var PostSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Post name',
		trim: true
	},
	content: {
		type: String,
		default: ''
	},
	major: {
		type: Boolean,
		default: false
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Post', PostSchema);
