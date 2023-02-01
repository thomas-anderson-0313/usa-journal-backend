const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let visitsSchema5 = new Schema(
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
    collection: "visits5",
  }
);

module.exports = mongoose.model("Visits5", visitsSchema5);