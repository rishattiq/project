const express=require("express");
const Router=express.Router();

const AddPlaceController=require("../Controllers/AddPlaceController");

Router.get("/getplace",AddPlaceController.getPlace)
Router.post("/addplace",AddPlaceController.createPlace)
Router.get("/allplace",AddPlaceController.allPlaces)
Router.get("/:id",AddPlaceController.placeInfo)
Router.delete("/:id",AddPlaceController.deletePlace)
Router.put("/:id",AddPlaceController.updatePlace)


module.exports = Router;