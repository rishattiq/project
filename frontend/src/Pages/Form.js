import React,{useState} from 'react'

import './Form.css';
export default function Form() {

  const [placename, setPlacename] = useState('')
  const [Price, setPrice] = useState('')
  
 const onplacenameHandler=(event)=>{
      let placen= event.target.value;
      console.log(placen)
      setPlacename(placename);
  }

 const onpriceHandler=(event)=>{
    let pric=event.target.value;
    console.log(pric)
    setPrice(Price);
  }

  return (
    <> 
    <div className='container'>
      <form className='form'>
      <h1>My Form</h1>
       
      <div className='divider'> 
         <div className='field'>
              <label>Add Place</label>
              {//<button type="button" class="btn-warning" > Upload File
              }
              {//<i className="fa fa-upload"></i> Upload File
              }
               <input type="file" class="btn-warning"/>
             
              
          </div>

          <div >
           <label className='field1'>PlaceName</label>
           <input type="place" name="place" placeholder="place" onChange={onplacenameHandler} className='field1'/>
         </div>
     </div>

      
      <div className='ui-form'>
        
         <div className='container' >
            <label >No of Rooms</label>
            <select className='field1'>
               <option className='rooms' value="">No of Rooms</option>
               <option value="">1-5</option>
               <option value="">6-10</option>
               <option value="">11-20</option>
            </select>
        
               <label>Price</label>
               <input type="Price" name="price" placeholder="price" onChange={onpriceHandler} className='field1'/>
         </div>
       </div>
         
         <div className='Button'>
             <button className='ui button transparent'>Clear</button>
             <button className='ui button blue'>Submit</button>
             
         </div>
        </form>
       </div>
     </>
    
  )
}
