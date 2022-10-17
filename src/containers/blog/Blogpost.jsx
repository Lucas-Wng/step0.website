import React from 'react'
import { useParams } from "react-router-dom";
import Blogpost1 from './posts/Blogpost1';
import Blogpost2 from './posts/Blogpost2';
import Blogpost3 from './posts/Blogpost3';
import Blogpost4 from './posts/Blogpost4';
import Blogpost5 from './posts/Blogpost5';
function Blogpost() {
  const { id } = useParams()
  if(id==1){
    return(
      <div>
        <Blogpost1 />
      </div>
    )
  }
  if(id==2){
    return(
      <div>
        <Blogpost2 />
      </div>
    )
  }
  if(id==3){
    return(
      <div>
        <Blogpost3 />
      </div>
    )
  }
  if(id==4){
    return(
      <div>
        <Blogpost4 />
      </div>
    )
  }
  if(id==5){
    return(
      <div>
        <Blogpost5 />
      </div>
    )
  }
  else{
    return (
      <div>
        <h1>Blog not found</h1>
      </div>
    )
  }
  
}

export default Blogpost