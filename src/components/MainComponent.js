import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import Stafflist from './StaffComponent';
import {STAFFS} from '../shared/staffs';
import StaffDetail from './StaffDetailComponent';
import { useParams } from "react-router-dom";
import { DEPARTMENTS } from '../shared/staffs';
import Departlist from './DepartmentComponent';
import Salarylist from './SalaryComponent';

class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            staffs : STAFFS,
            departments: DEPARTMENTS
        };
    }
  
    render(){
        const StaffWithId = () =>{
            let {staffId} = useParams();
            return(
                <StaffDetail staff={this.state.staffs.filter((staffmember) => staffmember.id === parseInt(staffId,10))[0]}/>
            )
         
        }
        return(
            <div>
            <Header/>
                <Routes>
                    <Route path='/staffMember' element={<Stafflist staffs={this.state.staffs} />}/>
                    <Route path='/staffMember/:staffId' element={<StaffWithId/>}/>
                    <Route path='/department' element={<Departlist departments={this.state.departments}/>}/>
                    <Route path='/salary' element={<Salarylist staffs={this.state.staffs}/>}/>
                    <Route path="/" element={<Navigate replace to="/staffMember" />} />
                </Routes>
            <Footer/>
      </div>
        );
    }
}
export default Main;