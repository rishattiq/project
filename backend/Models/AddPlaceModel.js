const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const placeSchema=new Schema({
  placename:{
    type:String,
    required:true,
  },  

   price:{
    type:String,
    required:true,
  } ,

  imageurl:{
    type:String,
    required:true,
  } ,

    numberofrooms:{
    type:String,
    required:true,
  } ,
  description:{
    type:String,
    required:false,
  } , 

});
const places = mongoose.model('place',placeSchema);

module.exports= places;
