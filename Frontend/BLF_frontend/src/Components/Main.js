import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <>
                <div className="text">버스 분실물 신고 웹</div>
                <div className="text2">버스에서 물건을 잃어버린 분들은 여기에 신고하세요.</div>
                <Link to="/auth" style={{ textDecoration: 'none', color: 'white' }} className="text3">작성하기!</Link>
             </>  
        );
    };
}

export default Main;