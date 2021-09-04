import React, { useEffect, useState } from 'react';
import HeaderBar from './HeaderBar';
import HeaderShort from './HeaderShort';
import HeaderMiddle from './HeaderMiddle';
import './Header.css'

const Header = ({ocation}) => {
    const [headerShow, setHeaderShow] = useState("");

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            if(window.innerWidth <590){
                setHeaderShow("short");
            }
            else{
                setHeaderShow("long");
            }
        })
    },[])
    return (
        <div className="background">
            <HeaderBar type="head"/>
            <HeaderMiddle />
        </div>
     );
}
 
export default Header;