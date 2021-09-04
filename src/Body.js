import "./Body.css";
import MyWork from "./MyWork";
import PopularProjects from "./PopularProjects";
import FutureVentures from "./FutureVentures";
import {Link} from 'react-router-dom';

const navSt = {
    textDecoration:'none'
}

const Body = () => {
    return (
        <div>
            <div className="intoBodyContainer">
                <MyWork/>
            </div>

            <div className="popularProjectsContainer">
                <PopularProjects/>
            </div>

            <div className="futureVenturesContainer">
                <FutureVentures/>
            </div>
            
            <div className="endButtonsContainer">

            <Link to="/projects" className="softwareBut endButton" href="/projects" style={navSt}>Projects</Link>
            <Link to="/contact" className="contactBut endButton" href="/contact" style={navSt}>Contact Me</Link>
            </div>
        </div>
     );
}
 
export default Body;