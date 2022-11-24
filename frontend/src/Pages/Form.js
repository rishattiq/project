import React, { useState} from "react";
import "./Form.css";
import {
  Link
} from "react-router-dom";

export default function Form() {
  
  const [placename, setPlacename] = useState("");
  const [price, setPrice] = useState("");
  const [numberofrooms, setNumberofrooms] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [description, setdescription] = useState("");

 

  const addPlace = (e) => {
    e.preventDefault();

    let obj = {
      placename,
      numberofrooms,
      price,
      imageurl,
      description
    };
    
    fetch("http://localhost:8000/host/addplace", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      setImageurl('')
      setNumberofrooms('')
      setPlacename('')
      setPrice('')
      setdescription('')
      
  };




  const onplacenameHandler = (event) => {
    setPlacename(event.target.value);
  };

  const onimageurlHandler = (event) => {
    setImageurl(event.target.value);
  };

  const ondescriptionHandler = (event) => {
    setdescription(event.target.value);
  };

  const onpriceHandler = (event) => {
    setPrice(event.target.value);
  };

  const onnumberofroomsHandler = (event) => {
    setNumberofrooms(event.target.value);
  };

  
  return (
    <>
      <div data-testid="comps" className="container">
        {/* <a href='/HostDashboard'><button>All</button></a>  */}
       
        <form className="form"  >
          <h1>Add Place Form</h1>

          <div className="divider">
            <div className="field">
              <label>Add Imageurl</label>
              {}
              {}
              <input
                type="text"
                onChange={onimageurlHandler}
                value={imageurl}
                class="btn-warning"
              />
            </div>

            <div>
              <label className="field3">Description</label>
              <input className="field2"
                type="description"
                name="description"
                placeholder="description"
                value={description}
                onChange={ondescriptionHandler}
              />
            </div>
          </div>

          <div className="ui-form">
            <div className="container">


            <label>PlaceName</label>
              <input
                type="PlaceName"
                name="PlaceName"
                placeholder="PlaceName"
                onChange={onplacenameHandler}
                value={placename}
                className="field1"
              />

              <label>Number of Rooms</label>
              <input
                type="No of Rooms"
                name="Rooms"
                placeholder="Rooms"
                onChange={onnumberofroomsHandler}
                value={numberofrooms}
                className="field1"
              />

              <label>Price</label>
              <input
                type="Price"
                name="price"
                placeholder="price"
                onChange={onpriceHandler}
                value={price}
                className="field1"
              />
            </div>
          </div>
          
          <div className="Button">
            {/* <button className='ui button blue' onClick={addPlace}>Submit</button> */}
            <button className=" fluid ui button blue" type="submit" onClick={addPlace}>
            Submit
            </button>
          </div>
         
        </form>
        <div className="Button1">
        <a className=" fluid ui button transparent" href='/'>Back</a>
        </div>
      </div>
    </>
  );
}
