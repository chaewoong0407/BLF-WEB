import React,{ Component } from 'react';
import Main from '../Components/Main';
import styled from 'styled-components';

class MainForm extends Component {
    render(){
        return(
            <Back>
                <Main />
            </Back>
        );
    };
}


const Back = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #F1F2F6;
`;

export default MainForm;