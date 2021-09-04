import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './HeaderShort.css'

const HeaderShort = () => {

    const navStyle={
        textDecoration:'none',
        color:"black"
    };

    const [showingShort, setShowingShort] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            
            setShowingShort(false);
        });
        return () => {
            window.removeEventListener("scroll", ()=>{});
        }
    }, []);

    function funClick(){
        setShowingShort(!showingShort);
    }
    return ( 
        <div className="shortMainConainer">
            <div className="shortTopContainer">
            <Link to="/" style={navStyle} className="shortTitle">Savinu Dissanayake</Link>
                <div className="shortIcon" onClick={funClick}><MoreHorizIcon style={{fontSize:50}}/></div>
            </div>
            <div className={`anime ${showingShort?"shortBottomContainer":"shortContentHide"}`}>
                <Link to="/projects" style={navStyle}>
                    <p className="shortContent">Projects</p>
                </Link>

                <Link to="/about" style={navStyle}>
                    <p className="shortContent">About</p>
                </Link>
    
                <Link to="/contact" style={navStyle}>
                    <p className="shortContent">Contanct</p>
                </Link>

                <Link to="/login" style={navStyle}>
                    <p className="shortContent">Login</p>
                </Link>
            </div>
        </div>
     );
}

export default HeaderShort;
