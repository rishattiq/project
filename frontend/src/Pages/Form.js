import React,{useState} from 'react'
import './Form.css';
import axios from 'axios';


export default function Form() {
  const [Files, setfile] = useState('')
  const [placename,setPlacename] = useState('')
  const [Price, setPrice] = useState('')
  const [Rooms, setRooms] = useState('')
  let arr=[Rooms];
  const handleClear = event =>{
    setRooms(event.target.value);
  }
 const handleClick = () =>{
  setRooms('');
 }
 
const addPlace = () =>{
  alert(Price);
  axios.post('http://localhost:8000/host/addplace',{
    placename,Price,imageurl:'42873982',Rooms,
  }).then(function(response){
    return response;
  }).catch(function(error){
    return error;
  });
}

  const onplacefileHandler=(event)=>{
    let files= event.target.file;
    console.log(files);
    setfile(Files);
   console.log("fileadded");
}

  const onplacenameHandler=(event)=>{
      setPlacename(event.target.value);
  }

  const onpriceHandler=(event)=>{

    setPrice(event.target.value);
  }

  const onroomHandler=(event)=>{
   setRooms(event.target.value);
  }
  

  return (
    <> 
    <div className='container'>
      <form className='form'>
      <h1>My Form</h1>
       
      <div className='divider'> 
         <div className='field'>
              <label>Add Place</label>
              {
              }
              {
              }
               <input type="file" onChange={onplacefileHandler} class="btn-warning"/> 

          </div>

          <div >
           <label className='field1'>PlaceName</label>
           <input type="place" name="place" placeholder="place" onChange={onplacenameHandler} className='field1'/>
         </div>
     </div>
      
      <div className='ui-form'>
        
         <div className='container' >
            <label >No of Rooms</label>
            <input type="No of Rooms" name="Rooms" placeholder="Rooms" onChange={onroomHandler} className='field1'/>
        
               <label>Price</label>
               <input type="Price" name="price" placeholder="price" onChange={onpriceHandler} className='field1'/>
         </div>
       </div>
         
         <div className='Button'>
             <button className='ui button transparent' onClick={handleClick}>Clear</button>
             <button className='ui button blue' onClick={addPlace}>Submit</button>
             
         </div>
        </form>
       </div>
     </>
  )
  
}
