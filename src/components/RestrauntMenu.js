import React from 'react';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const RestrauntMenu = () => {
    const[resInfo,setResinfo] = useState(null);
    useEffect(() =>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data= await fetch("https://fakestoreapi.com/products");
        const json= await data.json();
        setResinfo(json);
        // console.log(json);
    }

  return resInfo===null?( <Shimmer/> ) : (
    <div className='menu'>
        {resInfo.map(item => 
        <li key={item.id}> {item.title}</li>)
        }
    </div>
  )
}

export default RestrauntMenu
