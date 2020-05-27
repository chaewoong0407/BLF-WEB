import React, { Component } from 'react';
import Form from 'Components/Auth/Form/Form';
import './SignUp.css';
import { Link } from 'react-router-dom';

class ManagerSignin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            pw: '',
            isRedirect: false
        };
    }

    handlemail = e => {
        this.setState({ email: e.target.value });
    }
    handlename = e => {
        this.setState({ name : e.target.value });
    }
    handlepw = e => {
        this.setState({ pw: e.target.value });
    }
    onSubmit = e => {
        e.preventDefault();
    };
    render() {
        return (
            <>
            <Form/>
            <form onSubmit={this.onSubmit}>
            <div className="signup">SIGN UP ON BUS L&F REPORT WEB</div>
            <div className="account">CREATE A FREE ACCOUNT</div>
            <input type="text" placeholder="Full name" value={this.state.name} onChange={this.handlename}/>
            <input type="Email" placeholder="E - mail" value={this.state.email} onChange={this.handlemail}/>
            <input type="password" placeholder="Password" value={this.state.pw} onChange={this.handlepw}/>
            <input type="password" name="pw" placeholder="Retype Password"/>
            <button className="success">SIGN UP NOW</button>
            <Link to="/auth/manager" className="re">Sign In</Link>
            </form>
            </>
       );
    };
}

export default ManagerSignin;
