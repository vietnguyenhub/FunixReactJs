import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDepartment({ depart }) {
  return (
        <Card>
          <Link to={`/department/${depart.id}`}>
            <CardTitle>{depart.name}</CardTitle>
          </Link>
          <p>Số lượng nhân viên: {depart.numberOfStaff}</p>
        </Card>
  );
}
const Departlist = props => {
  const departlist = props.departments.map(department => {
    return (
      <div className='col-12 col-sm-6 col-md-4 depart' key={department.id}>
        <RenderDepartment depart={department} />
      </div>
    );
  });
  return (
    <div className='container'>
      <div className='row'>{departlist}</div>
    </div>
  );
};
export default Departlist;
