import {useState,useEffect} from 'react'
import Header from '../Components/Header'
import "./HostDashboard.css";
import axios from "axios";
//import PlaceItem from '../Components/PlaceItem';
// import places from '../../../backend/Models/AddPlaceModel';
   
export default function HostDashboard() {
  const [listOfPlaces,setListOfPlaces]=useState([])
  var  mylist= []
  
 useEffect(()=>{
  fetch("http://localhost:8000/host/allplace")
  .then((response) =>response.json() )
  .then(data=> setListOfPlaces(data.place));
},[]);

mylist= listOfPlaces
console.log(listOfPlaces)

  return (
    <>
    <Header/>

    <h1 className='title'>Host Dashboard</h1>
    {
  
  
      mylist.map((place)=>{
       var image=place.imageurl;
        return (
          <>
         { 
         
          <div className='back'>
          <h4 className='image'>
            <img data-testid="headerimage" className='image' src={place.imageurl}></img> 
            </h4>
            <p data-testid="description" className='styling1'>
            {place.description}
          </p>
           <h3 data-testid="placenames" className='styling2'> 
           {place.placename}
           </h3>
           <p data-testid="numberofrooms" className='styling3'>
            {place.numberofrooms}  
           </p>
           <p data-testid="price" className='styling4'>
            {place.price} 
           </p> 
           
         <a className="pure-button" href="#" onClick={ async()=>{
          (await axios.update(`http://localhost:8000/host/update/${place._id}`))
          .then(alert(''))
          .catch((error)=> 
          console.log(error));}}
           >Update</a>

         <a class="pure-buttons" href="#" onClick={ async()=>{
          (await axios.delete(`http://localhost:8000/host/delete/${place._id}`))
          .then(alert('Deleted'))
          .catch((error)=> 
          console.log(error));
         }}>Delete</a>

         </div>
       }
          
         
          </>
         
        )
      })
    }
 </>
  );
          
  
  }
          
