
import './App.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffListComponent';
import {STAFFS} from './shared/staffs.jsx';
//update line 7
//update something new
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      staffs : STAFFS
    };
  }// update line 15 
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs}/>
      </div>
    );
  }
}
//update line 29 
export default App;
// update line 31