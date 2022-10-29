import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [placename, setPlacename] = useState("");
  const [price, setPrice] = useState("");
  const [numberofrooms, setNumberofrooms] = useState("");
  const [imageurl, setImageurl] = useState("");

  const addPlace = (e) => {
    e.preventDefault();

    let obj = {
      placename,
      numberofrooms,
      price,
      imageurl,
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
  };

  const onplacenameHandler = (event) => {
    setPlacename(event.target.value);
  };

  const onimageurlHandler = (event) => {
    setImageurl(event.target.value);
  };

  const onpriceHandler = (event) => {
    setPrice(event.target.value);
  };

  const onnumberofroomsHandler = (event) => {
    setNumberofrooms(event.target.value);
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={addPlace}>
          <h1>My Form</h1>

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
              <label className="field1">PlaceName</label>
              <input
                type="place"
                name="place"
                placeholder="place"
                value={placename}
                onChange={onplacenameHandler}
                className="field1"
              />
            </div>
          </div>

          <div className="ui-form">
            <div className="container">
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
            <button className="ui button blue" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
