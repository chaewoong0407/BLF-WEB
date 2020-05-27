import React, { Component } from 'react';
import './Form.css';
import bgbus from 'img/loginbus.png';
import person from 'img/person.png';
import { Link } from 'react-router-dom';


class Form extends Component {
    render() {
        return (
            <div className="box">
                <div className="blue"/>
                <Link to="/auth"><img className="person" alt="사람" src={person} /></Link>
                <img className="bgbus"alt="버스" src={bgbus}/>
            </div>
        );
    };
}

export default Form;