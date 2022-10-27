const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const placeSchema=new Schema({
  placename:{
    type:String,
    required:true,
  },  

   price:{
    type:String,
    required:false,
  } ,

  imageurl:{
    type:String,
    required:false,
  } ,

    numberofrooms:{
    type:String,
    required:false,
  } ,
});
const places = mongoose.model('places',placeSchema);

module.exports= places;
