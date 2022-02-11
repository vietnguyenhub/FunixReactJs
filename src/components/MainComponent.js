import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Stafflist from './StaffComponent';
import StaffDetail from './StaffDetailComponent';
import Departlist from './DepartmentComponent';
import Salarylist from './SalaryComponent';
import { connect } from 'react-redux';
import {
  fetchStaffs,
  fetchDepartments,
  fetchSalary,
} from '../redux/ActionCreators';
import DepartDetail from './DepDetailComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//main Component


const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    salary: state.salary,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
  fetchSalary: () => {
    dispatch(fetchSalary());
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchSalary();
  }
  render() {
    // const DeptId = ({ match }) =>{
    //     <DepartDetail

    //       />
    // }
    const StaffId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.props.staffs.staffs.filter(
              staff => staff.id === parseInt(match.params.id, 10)
            )[0]
          }
          departments={this.props.departments.departments}
        />
      );
    };
    return (
      <div>
        <Header />
        <TransitionGroup>
        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch location={this.props.location}>
          <Route
            exact
            path='/staffMember'
            component={() => <Stafflist staffs={this.props.staffs} />}
          />
          <Route exact path='/staffMember/:id' component={StaffId} />
          <Route
            exact
            path='/department'
            component={() => (
              <Departlist departments={this.props.departments.departments} />
            )}
          />
          <Route
            exact
            path='/department/:departmentId'
            component={() => (
              <DepartDetail
                staffs={this.props.staffs}
                departments={this.props.departments.departments}
              />
            )}
          />
          <Route
            path='/salary'
            component={() => (
              <Salarylist
                staffs={this.props.salary.salary}
                departments={this.props.departments.departments}
              />
            )}
          />
          <Redirect to='/staffMember' />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
