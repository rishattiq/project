const placesmodel=require("../Models/AddPlaceModel");

exports.getPlace = (req,res) => res.send("this is your data");

exports.createPlace = async(req,res)=>{
    
    const placename=req.body.placename
    const price=req.body.price
    const imageurl=req.body.imageurl
    const numberofrooms=req.body.numberofrooms
    const description=req.body.description

    let places=new placesmodel({
        placename,
        price,
        imageurl,
        numberofrooms,
        description
    })

    places.save().then(result=>{
        console.log('Posted');
        res.status(200).json("done added"+result)
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.allPlaces=(req,res)=> {
    placesmodel.find().then(place=>{
        res.status(200).json({
            'place':place
        })
    }).catch(err=>{
        console.log(err);
    })
};

exports.placeInfo=(req,res)=> {
    placesmodel.findById(req.params.id, function(err,place){
     if(err) return next(err);
     res.send(place);
    });
};


exports.deletePlace=(req,res)=> {
    placesmodel.findByIdAndRemove(req.params.id, function(err,place){
     if(err) return next(err);
     res.send("Data Deleted Successfully");
    });
};

exports.updatePlace=(req,res)=> {
    placesmodel.findByIdAndUpdate(req.params.id,req.body,{ new: true}, function(err,place){
     if(err) return next(err);
     res.send("Data Updated Successfully");
    });
};