import './Login.css';
import './App.css';
import HeaderBar from './HeaderBar';
import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import {Link} from 'react-router-dom';


class Login extends Component{
    
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onLogin = this.onLogin.bind(this);

        this.state = {
            username: '',
            password: '',
            users:[]
        };
    }

    componentDidMount(id){
        axios.get('http://localhost:5000/users/')
        .then(response => {
            this.setState({users:response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            password: this.state.password,
        };

        const number_of_users =(this.state.users).length;
        let count = 0;

        for(let x=0; x<number_of_users; x++){
            if(this.state.username == this.state.users[x].username){
                count++;
            }
        }

        if(count === 0){
            axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data));
        }else{
            alert("username already exist");
        }
        this.setState({
            username:'',
            password:''
        })
    }

    onLogin(e){
        const number_of_users =(this.state.users).length;
        let counter=0;
        for(let x=0; x<number_of_users; x++){
            if(this.state.username == this.state.users[x].username){
                if(this.state.password == this.state.users[x].password){
                    this.props.loggedIn(this.state.username);
                    console.log("correct password");
                }
            }
            counter++;
        }
        if(counter===0){
            alert("The user does not exist");
        }
        this.setState({
            username:'',
            password:'',
            users:[]
        })
       
    }

    render(){

        return ( 
            <div>
                <HeaderBar type="short"/>
                <div className="loginContainer">
                    <div className="loginForm">
                        <div className="loginTitle">Login/Create New Account</div>
                        <div className="inputForm">
                            <div className="usernameInput">
                            <input type="text" id="username" placeholder="Username"
                                required
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                            />
                            </div>

                            <div className="passwordInput">
                            <input type="password" id="password" placeholder="Password"
                                required
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                            </div>

                            <div className="loginButton">
                                <div className="login" onClick={this.onLogin}>Login</div>
                                <div className="createButton" onClick={this.onSubmit}>Create New Account</div>
                            </div>
                        </div>

                    </div>
                    {
                        (this.props.status=="admin")?<Link to="/addproject">
                        <p className="title">Add Project</p>
                        </Link>:""
                    }
                </div>
            </div>
        );
    }
}
 
export default Login;
