import React, { Component } from 'react';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';

class ManagerSignUp extends Component {
    render() {
        return (
            <>
            <Form/>
            <div className="signup">SIGN IN ON BUS L&F REPORT WEB</div>
            <div className="account">SIGN TO YOUR ACCOUNT</div>
                <input type="Email" placeholder="E - mail" />
                <input type="password" placeholder="Password" />
                <input type="password" name="pw" placeholder="Retype Password" />
                <button className="success">SIGN IN NOW</button>
                <Link to="/auth/Register" className="re">Sign Up</Link>
            </>
        );
    };
}


export default ManagerSignUp;
