'use strict'

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const roleSchema = mongoose.Schema({
    claim: String,
    match_type: String,
    role: String,
    value: String,
    status: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

roleSchema.plugin(paginate);

const Role = module.exports = mongoose.model('role', roleSchema);