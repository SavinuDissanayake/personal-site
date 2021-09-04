import "./Body.css";
const MyWork = () => {
    return ( 
        <div>
            <br/><br/><br/>
            <div className="myWorkTitle">
                MY WORK
            </div>
            <br/><br/><br/><br/>
            <div className="myWorkContent">
                To shortly introduce myself, my Name is Savinu Dissanayake, and
                I am a first year engineering student at Simon Fraser University.<br/>
                So far I have acquired a lot of experience in programming in my 
                first year but most of the know the knowledge I gained from<br/> my own
                research. I am just guy who is really interested in technology and
                programming.
            </div>
            <br/><br/>
            <div className="devContainer">
                <div className="devTitle">Software Development</div>
                <p className="devContent">
                    • JavaScript and python programming<br/>
                    • React and React Native<br/>
                    • Object oriented programming (C++)<br/>
                </p>
            </div>

            <br/><br/>
            <div className="devContainer">
                <div className="devTitle">Electronics</div>
                <p className="devContent">
                    • Automatic blinds opener<br/>
                    • Touch sensetive dice roller<br/>
                </p>
            </div>

            <br/><br/>
            <div className="devContainer">
                <div className="devTitle">Community</div>
                <p className="devContent">
                    • Open source projects on Github<br/>
                </p>
                <br/><br/><br/><br/>
            </div>
        </div>
     );
}
 
export default MyWork;