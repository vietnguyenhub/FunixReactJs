import React from 'react';
import { Card, CardImg, CardText, CardBody,
  Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderStaff({staff, depts}){ 
        const DepOfStaff = depts.find(dept => dept.id === staff.departmentId)
            return(
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-sm-4">
                            <CardImg src={ staff.image} alt={staff.name}/>
                        </div>
                        <div className="col-sm-8">
                            <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'scale(0.5) translateY(-50%)'
                                }}>
                                <Card>
                                    <CardBody>
                                        <CardText><h3>Họ và tên: {staff.name}</h3> </CardText>
                                        <CardText><p>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</p></CardText>
                                        <CardText><p>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</p></CardText>
                                        <CardText><p>Phòng ban: {DepOfStaff.name} </p></CardText>
                                        <CardText><p>Số ngày nghỉ còn lại: {staff.annualLeave} </p></CardText>
                                        <CardText><p>Số ngày đã làm thêm: {staff.overTime} </p></CardText>
                                    </CardBody>
                                </Card>
                            </FadeTransform>
                        </div>
                    </div>
                </div>
    );
}
const StaffDetail = (props) =>{
       
        return(
            <Stagger in>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/staffMember">Nhân Viên</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <Fade in>
                        <div className="col-12 ">
                            {props.staff && <RenderStaff staff={props.staff} depts={props.departments}/>}
                        </div>
                        </Fade>
                    </div>
                </div>
            </Stagger>
                
        );
    }
    

export default StaffDetail;