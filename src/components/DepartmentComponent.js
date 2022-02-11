import React from "react";
import { Card,
    CardTitle, } from 'reactstrap';



function RenderDepartment ({depart, onClick}){
    return(
                    <Card>
                        <CardTitle>
                            {depart.name}
                        </CardTitle>
                            <p>Số lượng nhân viên: {depart.numberOfStaff}</p>
                    </Card>
    );
}
const Departlist = (props) => {

    const departlist = props.departments.map((department)=>{
        return(
            <div className="col-12 col-sm-6 col-md-4 depart" key={department.id}>
                <RenderDepartment depart={department}/>
            </div>
        )
    });
    return(
        <div className="container">
            <div className="row">
                {departlist}
            </div>

        </div>
        )
}
export default Departlist;