import React, { useState } from "react";
export default function Header(){
    const [titlecomponent,settittlecomponent] = useState("HEADER PAGE")

    return (        

      <h1>{titlecomponent}</h1>
      



    )


}