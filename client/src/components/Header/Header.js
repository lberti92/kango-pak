import React, { useState, useEffect } from "react";
import "./Header.scss";



function Header () {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      window.addEventListener('scroll', parallaxShift());
      return () => {
        window.addEventListener('scroll', parallaxShift());
      };
    });

    function parallaxShift () {
      setOffset(offset + .5);
    }

    return (
        <header 
          className='header-background'
          style={{ backgroundPositionY: {offset}}} >
        </header>

      )

} 

export default Header;

