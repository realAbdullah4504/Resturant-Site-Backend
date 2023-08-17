const mongoose = require("mongoose");

const dealsSchema = new mongoose.Schema(
  {
  category:{type:String,required:true},
  title:{type:String,required:true},
  price:{type:Number,required:true},
  description:{type:String,required:true},
  image:{type:String,required:true},
  },
  {
    timestamps: true,
  }
);

const Deal = mongoose.model("Deal", dealsSchema);
module.exports = Deal;
