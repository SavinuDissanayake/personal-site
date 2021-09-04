import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import HeaderBar from "./HeaderBar";
import "./Contact.css"

const Message = props => (
    <div className="message">
        <div className="MessageUserName">{props.message.username}</div>
        <div className="messageDate">{props.message.date}</div>
        <div className="messageContent">{props.message.message}</div>
    </div>
)

export default class Contact extends Component{
    
    constructor(props){
        super(props);
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onPost = this.onPost.bind(this);

        this.state = {
            username: '',
            message: '',
            date: '',
            messages: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/messages/')
        .then(response =>{
            this.setState({messages:response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    messageList() {
        return this.state.messages.map(currentmessage => {
            return <Message message = {currentmessage} key={currentmessage._id}/>;
        })
    }

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }

    onChangeMessage(e){
        this.setState({
            message:e.target.value
        })
    }

    onChangeDate(e){
        this.setState({
            date:e.target.value
        })
    }

    onPost(e){
        e.preventDefault();
        var today = new Date();
        if(this.props.username !== ""){
            const message = {
                username: this.props.username,
                message:this.state.message,
                date: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
            }
            console.log(message);
            axios.post('http://localhost:5000/messages/add', message)
            .then(res => console.log(res.data))
            .catch(err=> console.log(err));

            this.state.messages.unshift(message);
            this.setState({
                username: '',
                message: '',
                date: '',
            })
        }else{
            alert("Please login before posting a message!")
        }
    }
    
    render(){
        return ( 
            <div>
                <HeaderBar type="short"/>
                <div className="contactMainContainer">
                    <div className="contactContainer">
                        <div>
                            <div className="SubmitMessageContainer">
                                <div className="inputMessage">
                                <input type="textField" placeholder="What's on your mind? " id="inputField"
                                    required
                                    value={this.state.message}
                                    onChange={this.onChangeMessage}
                                />
                                </div>                            
                                <div className="postButton" onClick={this.onPost}>Post</div>
                            </div>
                        </div>
                        <br/><br/>
                        {this.messageList()}
                    </div>
                </div>
            </div>
        );
    }
}
 
