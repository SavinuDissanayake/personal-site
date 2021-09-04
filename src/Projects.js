import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import "./Projects.css"
import HeaderBar from './HeaderBar';

const navStyle ={
    textDecoration:'none',
    color:'black'
}

const NavStyle ={
    textDecoration:'none',
    color:'white'
}

const ProjectShort = props => (
    <div className="project_con">
        
        <div className="tableContent"><a href={props.project.gitlink} className="linkStyling" style={navStyle}>{props.project.projectTitle}</a></div>
        <div className="tableContent">{props.project.languages}</div>
        <div className="tableContent">{props.project.date}</div>
    </div>
)

const Project = props => (

    <div className="projectListContainer">
        <div className="projTitle"><a href={props.project.gitlink} className="LinkStyling" style={NavStyle}>{props.project.projectTitle}</a></div>
        <div className="projDate">{props.project.date}</div>
        <div className="projGitLink">{props.project.gitlink}</div>
        <div className="projDescrip">
            {props.project.description}
        </div>
    </div>
)

export default class Projects extends Component{

    constructor(props){
        super(props);
        this.state = {projects: []}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/projects/')
        .then(response =>{
            this.setState({projects: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    projectShortList(){
        return this.state.projects.map(currentproject => {
            return <ProjectShort project={currentproject} key={currentproject._id}/>;
        })
    }

    projectList(){
        return this.state.projects.map(currentproject => {
            return <Project project={currentproject} key={currentproject._id}/>;
        })
    }

    /*const headerStyle={
        backgroundColor:"red"
    }*/
    render(){
        return (
            <div className="projectFirstContainer">
                <HeaderBar type="short"/>
                <div className="projectsContainer">
                    <div className="projectsField">
                        <div className="projectsHeader">PROJECTS</div>
                        <div className="projectsRepository">
                            <div className="repositoryTitle">Software Repository</div>
                            <div className="projectTable">
                                <div className="tableTitles">
                                <div className="tableProTitle">Title</div>
                                <div className="tableProTitle">Language</div>
                                <div className="tableProTitle">Created at</div>
                                </div>
                                {this.projectShortList()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="decriptiveProjects">
                    {this.projectList()}
                </div>
            </div>
        );
    }
}
 
