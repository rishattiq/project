import React from 'react'
import './Update.css';
import axios from 'axios';
import { useState} from 'react';
import Form from './Form';

export default function Update(){

  const [id,setId] = useState("");
  const [image,setImageurl]= useState("");
  const [placename,setPlacename]= useState("");
  const [description,setDescription]= useState("");
  const [price,setPrice]= useState("");
  const [numberofrooms,setNumberofrooms]= useState("");
  

    return (
    <>
<div class="updatepage">

    <div className="search">
      <label>Search</label>

      <input id="id" className="searchbar" type="text" placeholder="Enter ID" value={id} onChange={(event) => {setId(event.target.value);}} />

      <button className="searchbtn" onClick={() =>
         {
          axios.get(`http://localhost:8000/host/update/${id}`).then((response) => {
          setImageurl(response.data.place.imageurl);  
          setPlacename(response.data.place.placename); 
          setDescription(response.data.place.description); 
          setNumberofrooms(response.data.place.numberofrooms); 
          setPrice(response.data.place.price); 
        });
        }

      }>Search</button>

    </div>
    
    
   
      <div class="form">
      <div class="title">Update Place</div>
      <div class="">
        <input id="placename" class="input" type="text" placeholder=" " value={placename} onChange={(event) => {
        setPlacename(event.target.value);}} />
        <div class="cut"></div>
        <label for="name" class="placeholder">Place Name</label>
      </div>
 

      <div class="">
        <input id="image" class="input" type="text" placeholder=" " value={image} onChange={(event) => {
        setImageurl(event.target.value);}} />
        <div class="cut"></div>
        <label for="image" class="placeholder">ImageUrl</label>
      </div>

      <div class="">
        <input id="description" class="input" type="text" placeholder=" " value={description} onChange={(event) => {
        setDescription(event.target.value);}} />
        <div class=""></div>
        <label for="seats" class="placeholder">Description</label>
      </div>

      <div class="">
        <input id="placename" class="input" type="text" placeholder="Placename " value={placename} onChange={(event) => {
        setPlacename(event.target.value);}} />
        <div class=""></div>
        <label for="price" class="placeholder">Price</label>
      </div>

      <div class="">
        <input id="numberofrooms" class="input" type="text" placeholder=" " value={numberofrooms} onChange={(event) => {
        setNumberofrooms(event.target.value);}} />
        <div class=""></div>
        <label for="numberofrooms" class="placeholder" >numberofrooms</label>
      </div>

      <button type="text" class="submit" onClick = {() =>

        {
          const data = {image,description,placename,numberofrooms,price};
          axios.put(`http://localhost:8000/host/update${id}`, data).then((response) => 
          {
            alert("Updated");
            window.location.reload(false);
          }).catch((err) => 
          {
          console.error(err);
          });

        }

      }>Update</button>
    </div>
    </div>
    
    
    
    </>
      )
  }
