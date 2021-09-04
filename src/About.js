import HeaderBar from "./HeaderBar";
import selfie from './images/selfie.jpg'
import "./About.css";
const About = () => {
    return ( 
        <div>
            <HeaderBar type="short"/>
            <div className="aboutMainCont">
                <div className="aboutContainer">
                    <div className="aboutTitle">ABOUT ME</div>
                    <div className="aboutCONTENT">
                        <img src={selfie} className="picture"/>
                        <div className="aboutMeContent">
                        Hi there, my name is Savinu Dissanayake. I am an engineering student at Simon Fraser University
                        that currently lives in British Columbia. Ever since I was a kid, I was always drawn to
                        technologies and building crazy ideas that came to my mind. I was never been the person
                        to accept knowledge without a proper explanation and proof. I first started programming
                            when  I was 16 years of age and my first programming language was C. By the time I was in
                            high school I enrolled in a couple of beginner-level programming classes, which focused on
                            the programming language called Python. Engineering new devices and programming software
                            give delight to my life rather than a notion of tedious tasks that I need to complete.
                        <br/><br/>
                        Outside of work I have many hobbies that bring joy to my life. Some of them are watching movies,
                        going out on adventures with my friends, and going out for dinner. I do admit with my busy
                        schedule I rarely have the opportunity to go out but when I do I make it a memorable experience.
                        It is my opinion that the best experiences occur when you have no idea how to get to your
                            destination but I agree it is not always the case.
                        <br/><br/>
                        All in all, it is my ambition to build technologies that improve the lifestyle of
                        the future mankind.
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;