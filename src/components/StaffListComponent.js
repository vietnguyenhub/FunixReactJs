import React, {Component} from "react";
import { Card, CardText, CardBody,
    CardTitle } from 'reactstrap';
import dateFormat from "dateformat";
//stafflist component
class StaffList extends Component{
    constructor(props){
        super(props);
        this.state ={selectedStaff : null }
    }
    onStaffSelect(staff){
        this.setState({selectedStaff:staff})
    }
    //RenderStaff
    renderStaff(staff){
        if (staff != null){
            return(
                <Card>
                    <CardBody>
                        <CardText><h3>Họ và tên: {staff.name}</h3> </CardText>
                        <CardText><p>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</p></CardText>
                        <CardText><p>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</p></CardText>
                        <CardText><p>Phòng ban: {staff.department.name} </p></CardText>
                        <CardText><p>Số ngày nghỉ còn lại: {staff.annualLeave} </p></CardText>
                        <CardText><p>Số ngày đã làm thêm: {staff.overTime} </p></CardText>
                    </CardBody>
                </Card>
            )
        }
    }
    //RenderstaffList
    render() {
        const staffList = this.props.staffs.map((staff) => {
            return (
              <div  className="col-12 col-sm-6 col-md-4">
                <div key={staff.id}
                  onClick={() => this.onStaffSelect(staff)}>
                    <Card>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
                
              </div>
            );
        });
        return (// RenderList 
            <div className="container">
                <div className="row">
                    {staffList}
                </div> 
                <div className="row">
                  <div  className="col-12 col-sm-6 col-md-4">
                    {this.renderStaff(this.state.selectedStaff)}
                  </div>
                </div>
            </div>
        );
    }
}
export default StaffList;