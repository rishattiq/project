const places = require("../Models/AddPlaceModel");
const placesmodel=require("../Models/AddPlaceModel");

exports.getPlace = (req,res) => res.send("this is your data");

exports.createPlace = async(req,res)=>{
    
   const {placename,price,imageurl,numberofrooms} = req.body;
   console.log(placename,price);
   const newPlace = new places({
    placename,price,imageurl,numberofrooms
   });
   
    // let places=new placesmodel({
    //     placename:req.body.placename,
    //     price:req.body.price,
    //     imageurl:req.body.imageurl,
    //     numberofrooms:req.body.numberofrooms,
    // })

    newPlace.save().then(result=>{
        console.log('Posted');
        res.status(200).send("done added"+result)
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.allPlaces=(req,res)=> {
      places.find(function(err,result){
        if(err) return next(err);
        res.send(result);
      });
};

exports.placeInfo=(req,res)=> {
    places.findById(req.params.id, function(err,place){
     if(err) return next(err);
     res.send(place);
    });
};


exports.deletePlace=(req,res)=> {
    places.findByIdAndRemove(req.params.id, function(err,place){
     if(err) return next(err);
     res.send("Data Deleted Successfully");
    });
};

exports.updatePlace=(req,res)=> {
    places.findByIdAndUpdate(req.params.id,req.body,{ new: true}, function(err,place){
     if(err) return next(err);
     res.send("Data Updated Successfully");
    });
};