"use strict";

let mongoose = require('mongoose');

let bookSchema = mongoose.Schema({
    title: String,
    author: String,
    numPages: Number
});

// Add virtual field 'id' which equals '_id'.
bookSchema.virtual('id').get(function(){
    return this._id.toHexString();
  });
  
  // Ensure virtual fields are serialised.
  bookSchema.set('toObject', {
    virtuals: true
  });

  bookSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj._id;
    delete obj.__v;
    return obj;
  }

module.exports = mongoose.model('book',bookSchema);

