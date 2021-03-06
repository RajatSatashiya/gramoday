const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commoditySchema = new Schema(
  {
    userID: {
      type: String,
      unique: true,
      required: true,
    },
    marketID: {
      type: String,
      required: true,
    },
    marketName: {
      type: String,
    },
    cmdtyID: {
      type: String,
      required: true,
    },
    marketType: {
      type: String,
    },
    cmdtyName: {
      type: String,
    },
    priceUnit: {
      type: String,
    },
    convFctr: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const commodity = mongoose.model("commodity", commoditySchema);
module.exports = commodity;
