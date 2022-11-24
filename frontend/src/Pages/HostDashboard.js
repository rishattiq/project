import {useState,useEffect} from 'react'
import Header from '../Components/Header'
import "./HostDashboard.css";
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
            <img className='image' src={place.imageurl}></img> 
            </h4>
            <p className='styling1'>
            {place.description}
          </p>
           <h3 className='styling2'> 
           {place.placename}
           </h3>
           <p className='styling3'> Rooms {place.numberofrooms}  
           </p>
           <p className='styling4'> ${place.price} 
           </p> 
           
         <a className="pure-button" href="#">Update</a>
         <a class="pure-buttons" href="#">Delete</a>
         </div>
       }
          
         
          </>
         
        )
      })
    }
 </>
  );
          
  
  }
          
