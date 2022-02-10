import React from 'react';
import { Card, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaffItem ({staff, onClick}) {
    return (
        <Card>
            <Link to={`/staffMember/${staff.id}`} >
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                    <h4>{staff.name}</h4>
            </Link>
        </Card>
    );
}

    const Stafflist = (props) => {

        const stafflist = props.staffs.map((staff) => {
            return (
                <div className="col-lg-2 col-sm-6 col-md-4" key={staff.id}>
                    <RenderStaffItem staff={staff} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Nhân Viên</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {stafflist}
                </div>
            </div>
        );
    }

export default Stafflist;