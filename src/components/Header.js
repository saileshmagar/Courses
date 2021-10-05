import React from "react";
function Header({name, title})
{
    return(
      <div style={{background:"red",padding:20,width:200}}>
          <h1>{title}</h1>
          <h1> {name}</h1>
          <p> This is header component </p>
      </div>
    );
}

export default Header;