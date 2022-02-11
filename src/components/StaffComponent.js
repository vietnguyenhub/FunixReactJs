import React from 'react';
import { Card, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent';
import {FadeTransform} from 'react-animation-components';


function RenderStaffItem ({staff, isLoading, errMess}) {
    return (
            <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                    <Card>
                        <Link to={`/staffMember/${staff.id}`} >
                            <CardImg width="100%" src={staff.image} alt={staff.name} />
                                <h4>{staff.name}</h4>
                        </Link>
                    </Card> 
            </FadeTransform>
        
    );
}

    const Stafflist = (props) => {

        const stafflist = props.staffs.staffs.map((staff) => {
            return (
                <div className="col-lg-2 col-sm-6 col-md-4" key={staff.id}>
                    <RenderStaffItem staff={staff} 
                    />
                </div>
            );
        });
        if(props.staffs.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            )
        }
        else if(props.staffs.errMess){
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.staffs.errMess}</h4>
                    </div>
                </div>
            )
        }
        else 
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