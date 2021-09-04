import React, { useEffect, useState } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import HeaderShort from './HeaderShort';
const HeaderBar = ({type}) => {

    const [show, handleShow] = useState([]);

    const [headerShow, setHeaderShow] = useState("j");

    useEffect(()=>{
        
            if(window.innerWidth <590){
                setHeaderShow("short");
            }
            else{
                setHeaderShow("long");
            }

            window.addEventListener("resize", ()=>{
                console.log(window.screen.width)
                if(window.innerWidth <590){
                    setHeaderShow("short");
                }
                else if(window.clientWidth <590){
                    setHeaderShow("short");
                }
                else{
                    setHeaderShow("long");
                }
            });
            return () =>{
                window.removeEventListener("resize", ()=>{});
            }
        
    },[])
    
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(type==="short"){
                if (window.scrollY > 3){
                    handleShow(true);
                }else handleShow(false);
            }
            else{
                if (window.scrollY > 100){
                    handleShow(true);
                }else handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", ()=>{});
        }
    }, []);

    const navStyle={
        textDecoration:'none',
        color:"black"
    };

    return ( 
        <div>
            {(headerShow === "short")?<HeaderShort/>:
            
                <div className={`nav ${show?"whiteNav":""}`}>
                    <div className="titleMiddle">
                        <div className="sectionOneTitle">
                            <Link to="/" style={navStyle}>
                                <p className="title title1">Savinu Dissanayake</p>
                            </Link>

                            <Link to="/projects" style={navStyle}>
                            <p className="title">Projects</p>
                            </Link>

                            <Link to="/about" style={navStyle}>
                            <p className="title">About</p>
                            </Link>
            
                        </div>
                        <div className="sectionTwoTitle">
                            <Link to="/contact" style={navStyle}>
                                <p className="title">Contanct</p>
                            </Link>

                            <Link to="/login" style={navStyle}>
                                <p className="title">Login</p>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
     );
}
 
export default HeaderBar;