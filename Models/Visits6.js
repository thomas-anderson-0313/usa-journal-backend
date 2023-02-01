const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let visitsSchema6 = new Schema(
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
    collection: "visits6",
  }
);

module.exports = mongoose.model("Visits6", visitsSchema6);