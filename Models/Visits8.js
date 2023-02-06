const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let visitsSchema8 = new Schema(
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
    collection: "visits8",
  }
);

module.exports = mongoose.model("Visits8", visitsSchema8);