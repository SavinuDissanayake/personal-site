import "./AddProjects.css";
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

export default class AddProject extends Component {

    constructor(props){
        super(props);

        this.onChangeProjectTitle = this.onChangeProjectTitle.bind(this);
        this.onChangeShortDescription = this.onChangeShortDescription.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLanguages = this.onChangeLanguages.bind(this);
        this.onChangeGitlink = this.onChangeGitlink.bind(this);
        this.onChangePopularProject = this.onChangePopularProject.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            projectTitle: '',
            shortDescription: '',
            description: '',
            languages: '',
            gitlink: '',
            popularProject: '',
            date: ''
        }
    }

    onChangeProjectTitle(e){
        this.setState({
            projectTitle: e.target.value
        });
    }

    onChangeShortDescription(e){
        this.setState({
            shortDescription: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    onChangeLanguages(e){
        this.setState({
            languages: e.target.value
        });
    }

    onChangeGitlink(e){
        this.setState({
            gitlink: e.target.value
        });
    }

    onChangePopularProject(e){
        this.setState({
            popularProject: !e.target.value
        });
    }

    onChangeDate(e){
        this.setState({
            date:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const project = {
            projectTitle: this.state.projectTitle,
            shortDescription:this.state.shortDescription,
            description: this.state.description,
            languages: this.state.languages,
            gitlink: this.state.gitlink,
            popularProject:this.state.popularProject,
            date: this.state.date
        };

        console.log(project);
        axios.post('http://localhost:5000/projects/add', project)
        .then(res => console.log(res.data));
    }

    render(){
        return ( 
            <div className="addProjectsContainer">
                <div className="addmiddle">
                    <div>
                        <div className="prjectAddTitle">Add Project</div>
                        <div className="contentAddProject">
                            <div className="projectTitleEntry">
                            <input type="text" className="ProjectTitle" placeholder="Project Title"
                                value={this.state.projectTitle}
                                onChange={this.onChangeProjectTitle}
                            />
                            </div>
                            <textarea rows="10" cols="60" placeholder="Short description of the project." className="shortDesContainer" id="projectDesShort"
                                value={this.state.shortDescription}
                                onChange={this.onChangeShortDescription}
                            >
                            </textarea>
                            <br/>
                            <textarea rows="20" cols="60" placeholder="indepth description of the project." className="longDesContainer" id="projectDesLong"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                            >
                            </textarea>
                            <br/>
                            <input type="text" className="projectGitLink" placeholder="project GitHub Link" id="GitLink"
                                value={this.state.gitlink}
                                onChange={this.onChangeGitlink}
                            />
                            <br/>
                            <input type="text" className="projectlanguages" placeholder="languages" id="languages"
                                value={this.state.languages}
                                onChange={this.onChangeLanguages}
                            />
                            <br/>
                            <br/>
                            <label className="projectImportant">Popular Projects </label>
                            <input type="checkbox" id="popularity"
                                value={this.state.popularProject}
                                onChange={this.onChangePopularProject}
                            />
                            <br/>
                            <div>
                                <input type="text" className="dateEnter" placeholder="date" id="date"
                                    value={this.state.date}
                                    onChange={this.onChangeDate}
                                />
                            </div>
                            <br/><br/>
                            <input type="submit" value="Create project Log" className="projectButton"
                                onClick={this.onSubmit}
                            /> {/* check*/}
                        </div>
                    </div>
                </div>
            </div>
        );
        }
    }
 