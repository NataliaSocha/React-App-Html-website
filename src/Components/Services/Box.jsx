import React from "react"; 

export default function Box({isNew, title}) {  
  return isNew ? (
    <div className="box box1">
      <div className="dot"></div>
      {title}    
      <p>(nowość)</p>
    </div>  
  ) : (
    <div className="box">{title}</div>  
  );
}
