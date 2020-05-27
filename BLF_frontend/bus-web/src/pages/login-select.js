import React, { Component } from 'react';
import './login-select.css';
import styled from 'styled-components';
import bus from 'img/bus.jpg';
import { Link, Route } from 'react-router-dom';
import { Login, Register } from 'pages';

class Auth extends Component {
    render(){
        return(
            <>
            <img className="bus" src={bus} alt="버스"></img>
                <p className="title">BUS<br/>LOST & FOUND<br/>REPORT WEB</p>
            <Back>
                    <Route path="/auth/manager" component={Login} />
                    <Route path="/auth/register" component={Register} />
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/reporter" className="report">REPORT A LOST ITEM</Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/auth/manager" className="manager">ACCESS AS MANAGER</Link>
                    <p className="privacy">COPYRIGH 2020. TEAM BLF . ALL RIGHTS RESERVED</p>
            </Back>
            </>
        );
    };
}

const Back = styled.div`
  position: absolute;
  top: 0;
  left: 51%;
  width: 49%;
  height: 100%;
  background-color: #E5E5E5;
`;

export default Auth;