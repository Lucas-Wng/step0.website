import React from 'react'
import { useParams } from "react-router-dom";
import Blogpost1 from './posts/Blogpost1';
import Blogpost2 from './posts/Blogpost2';
import Blogpost3 from './posts/Blogpost3';
import Blogpost4 from './posts/Blogpost4';
import Blogpost5 from './posts/Blogpost5';
import Blogpost6 from './posts/Blogpost6';
import Blogpost7 from './posts/Blogpost7';
import Blogpost8 from './posts/Blogpost8';
import Blogpost9 from './posts/Blogpost9';
import Blogpost10 from './posts/Blogpost10';
import Blogpost11 from './posts/Blogpost11';
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
  if(id==6){
    return(
      <div>
        <Blogpost6 />
      </div>
    )
  }
  if(id==7){
    return(
      <div>
        <Blogpost7 />
      </div>
    )
  }
  if(id==8){
    return(
      <div>
        <Blogpost8 />
      </div>
    )
  }
  if(id==9){
    return(
      <div>
        <Blogpost9 />
      </div>
    )
  }
  if(id==10){
    return(
      <div>
        <Blogpost10 />
      </div>
    )
  }
  if(id==11){
    return(
      <div>
        <Blogpost11 />
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