
import './App.css';
import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { News } from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component
{
  pageSize = 15;
  render(){
    return(
      
      <div>
        
        <Router>
        
        <Navbar/>
      
        <Switch>
          <Route exact path="/general"><News key="general" country="in" pageSize={this.pageSize} category="general"/></Route>
          <Route exact path="/buisness"><News key="buisness" country="in" pageSize={this.pageSize} category="buisness"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" country="in" pageSize={this.pageSize} category="entertainment"/></Route>
          <Route exact path="/health"><News key="health" country="in" pageSize={this.pageSize} category="health"/></Route>
          <Route exact path="/science"><News key="science" country="in" pageSize={this.pageSize} category="science"/></Route>
          <Route exact path="/sports"><News key="sports" country="in" pageSize={this.pageSize} category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" country="in" pageSize={this.pageSize} category="technology"/></Route>
          {/* <Route exact path="/general" element={<News key="general" country="in" pageSize={this.pageSize} category="general"/>}></Route>
          <Route exact path="/buisness" element={<News key="buisness" country="in" pageSize={this.pageSize} category="buisness"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" country="in" pageSize={this.pageSize} category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News key="health" country="in" pageSize={this.pageSize} category="health"/>}></Route>
          <Route exact path="/science" element={<News key="science" country="in" pageSize={this.pageSize} category="science"/>}></Route>
          <Route exact path="/sports" element={<News key="sports" country="in" pageSize={this.pageSize} category="sports"/>}></Route>
          <Route exact path="/technology" element={<News key="technology" country="in" pageSize={this.pageSize} category="technology"/>}></Route> */}
        </Switch>
        </Router>
      </div>
    )
  }
}


