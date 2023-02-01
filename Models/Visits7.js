const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let visitsSchema7 = new Schema(
  {
    visits: {
        type: Number,
        },
    views: {
        type: Number,
        },
    positives: {
      type: Number,
      },
    negatives: {
      type: Number,
      },  
    calls: {
        type: Number,
        }, 
  },
  {
    collection: "visits7",
  }
);

module.exports = mongoose.model("Visits7", visitsSchema7);