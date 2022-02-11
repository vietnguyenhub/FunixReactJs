import React from 'react';
import { Card, CardText, CardBody,
     Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

function RenderSalary ({staff, onClick}) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    const salary = (staff.salaryScale* basicSalary) + (staff.overTime * overTimeSalary);
    return (
        <Card>
                    <CardBody>
                        <h4>{staff.name}</h4>
                        <CardText><p>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</p></CardText>
                        <CardText><p>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</p></CardText>
                        <CardText><p>Phòng ban: {staff.department.name} </p></CardText>
                        <CardText><p>Số ngày nghỉ còn lại: {staff.annualLeave} </p></CardText>
                        <CardText><p>Số ngày đã làm thêm: {staff.overTime} </p></CardText>
                        <CardText><h4>Lương: {parseInt(salary)} VNĐ</h4></CardText>
                    </CardBody>
        </Card>
    );
}

    const Salarylist = (props) => {

        const salarylist = props.staffs.map((staff) => {
            return (
                <div className="col-12 col-sm-6 col-md-4" key={staff.id}>
                    <RenderSalary staff={staff} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                
                <Breadcrumb>
                        <BreadcrumbItem><Link to="/staffMember">Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem>Bảng Lương</BreadcrumbItem>
                    </Breadcrumb>
                        <hr />
                    </div>                
               
                <div className="row">
                    {salarylist}
                </div>
            </div>
        );
    }

export default Salarylist;