import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./Body.css";

const navStyle = {
    textDecoration:'none',
    color:"black",
}

const Project = props =>(
    <div className="projectLog">
        <div className="titleProj" style={navStyle}><a href={props.project.gitlink} style={navStyle} className="stylerLink">{props.project.projectTitle}</a></div>
        <div className="descrProj">{props.project.shortDescription}</div>
        <div className="langProj">{props.project.languages}</div>
    </div>

)

export default class PopularProjects extends Component {
    constructor(props){
        super(props);
        this.state = {projects: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/projects/')
        .then(response => {
            this.setState({projects:response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    projectList(){
        return this.state.projects.map(currentproject => {
            return <Project project={currentproject} key={currentproject._id}/>
        })
    }
    render(){
        return ( 
            <div>
                <div className="popularProjTitle">
                    Popular Projects
                </div>
                <hr/>
                <div className="titleHeader">
                    <p className="titleProj">Title</p>
                    <p className="descrProj">Description</p>
                    <p className="langProj">Language</p>
                </div>
                <hr/>
                <div className="project">
                    {this.projectList()}
                </div>
            </div>
        );
    }
}
 
