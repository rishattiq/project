import {useState,useEffect} from 'react'
import Header from '../Components/Header'
import Axios from "axios"; 
import { useState ,useEffect} from 'react';
   
export default function HostDashboard() {
  let users;
   const arr= []
  
 useEffect(()=>{
   axios.get("http://localhost:8000/host/allplace").then((response) => {
     users=response.user     
   });
 },[]);
  return (
    <>
    <div data-testid="comps" className='HostDashboard'>
    <Header/>
    </div>
   </>
  
  );
          
  
  }
          
