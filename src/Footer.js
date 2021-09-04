import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css';
import {Link} from 'react-router-dom';

const navStyle = {
    textDecoration:'none',
    color:'white'
}

const NavStyle = {
    textDecoration:'none',
    color:'black'
}

const Footer = () => {
    return ( 
        <div className="footerContainer">
            <div className="footerTitle">STAY CONNECTED</div>
            <div className="socialMediaLogos">
                <div className="footerLogos"><a href="https://www.instagram.com/savinu2/" className="footerLogos" style={NavStyle}><InstagramIcon/></a></div>
                <div className="footerLogos" style={{ fontSize: 40 }}><a href="https://www.instagram.com/savinu2/" className="footerLogos" style={NavStyle}><TwitterIcon/></a></div>
                <div className="footerLogos" style={{ fontSize: 40 }}><a href="https://github.com/SavinuDissanayake" className="footerLogos" style={NavStyle}><GitHubIcon/></a></div>
            </div>
            <div className="footerMenu">
                <div className="footerMenuContainer">
                    <Link to="/" className="homeTagFoot" style={navStyle}>Home</Link>
                    <Link to="/projects" className="softwareTagFooter" style={navStyle}>Projects</Link>
                    <Link to="/contact" className="contactTagFooter" style={navStyle}>Contact</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;