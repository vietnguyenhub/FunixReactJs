import React from 'react';
import { Card, CardImg, CardText, CardBody,
  Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

function RenderStaff({staff}){
    return(
        <div className="container-fluid">
            <div className="row ">
            <div className="col-sm-4">
                <CardImg src={staff.image} alt={staff.name}/>
            </div>
            <div className="col-sm-8">
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
            </div>
        </div>
        </div>
    );
}
const StaffDetail = (props) =>{
    if(props.staff != null) {
        return(
            <div className="container">
                <div className="row">
                <Breadcrumb>
                        <BreadcrumbItem><Link to="/staffMember">Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 ">
                        <RenderStaff staff={props.staff} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return(
            <div></div>
        );
    }
}
export default StaffDetail;