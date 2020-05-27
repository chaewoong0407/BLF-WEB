import React, { Component } from 'react';
import styled from 'styled-components';

class Report extends Component {
    render() {
        return(
            <>
            <Back>
            <Title>아래 문항에 답해주세요.</Title>
              <Question>1. 분실한 물품의 종류가 무엇인가요?</Question>
              <select className="sel">
                <option selected value="none">선택</option>
                <option value="wallet">지갑</option>
                <option value="umbrella">우산</option>
                <option value="electronics">전자기기</option>
                <option value="cosmetics">화장품</option>
                <option value="etc">기타</option>
              </select>
              <Question className="num2">2. 분실한 물품의 종류가 무엇인가요?</Question>
            </Back>
            </>
        );
    };
}

const Back = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #E5E5E5;
`;

const Title = styled.h1`
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  text-transform: uppercase;
  text-align: center;
  color: #5352EC;
`;

const Question = styled.div`
  position: absolute;
  left: 36%;
  font-family: Roboto;
  font-style: normal; 
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;


  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;

  &.num2 {
    position: absolute;
    top: 35%;
  }
`;



export default Report;