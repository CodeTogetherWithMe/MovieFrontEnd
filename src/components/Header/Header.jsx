import React, { useEffect, useState } from 'react';

import {Link} from 'react-router-dom';

import styled from './Header.module.css';

const Header = () => {

    const [cssVal, setCssVal] = useState(styled.navBar)


    useEffect(()=>{
        window.addEventListener("scroll", onScrollEvent);
    },[])

    const onScrollEvent = () =>{
        window.scrollY===0?setCssVal(styled.navBar):setCssVal(styled.navBarModified)
    }

    
    return ( 
        <React.Fragment>
            <div style={{height:"60px"}}></div>
            <div className={cssVal}>
                <div>
                <Link to="/home">Home</Link>
                <Link to="/library">Library</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Contact Us</Link>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Header;