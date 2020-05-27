import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainForm, Auth, Report } from 'pages'; 

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Route exact path="/" component={MainForm}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/reporter" component={Report}/>
      </BrowserRouter>
    );
  };
}

export default App; 
