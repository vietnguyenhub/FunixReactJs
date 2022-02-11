import React, { useState, useEffect } from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import AddStaff from './AddStaffComponent';

const RenderStaffItem = ({ staff, onClick }) => {
  return (
    <Card>
      <Link to={`/staffMember/${staff.id}`}>
        <CardImg width='100%' src={staff.image} alt={staff.name} />
        <h4>{staff.name}</h4>
      </Link>
    </Card>
  );
};

const Stafflist = ({ staffs, handleAddStaff }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [staffList, setStaffList] = useState(staffs);

  
  const onAddStaff = staff => {
    console.log(
      staff
    );

    handleAddStaff(staff);
  };

  const handleSubmit = event => {
    if (searchTerm.trim() !== '') {
      setStaffList(
        staffs.filter(staff =>
          staff.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setStaffList(staffs);
    }

    event.preventDefault();
  };
  /// sử dụng useEffect để cập nhập stafflist
  useEffect(() => {
    setStaffList(staffs);
  }, [staffs]);

  return (
    <div className='container'>
      <nav className='navbar navbar-light bg-light justify-content-between'>
        <h4>Nhân Viên</h4>
        <div>
          <div className='info-panel'>
            <AddStaff staff={staffs} onStaff={onAddStaff} />
          </div>
        </div>
        <form
          className=' col-12 col-sm-3 col-md-4 form-inline'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            className='form-control mr-sm-2'
            value={searchTerm}
            placeholder='Search'
            onChange={event => setSearchTerm(event.target.value)}
          />
          <Button type='submit' color="primary" className='btn btn-primary'>
            Tìm
          </Button>
        </form>
      </nav>
      <hr />
      <div className='row'>
        {staffList.length > 0
          ? staffList.map(staff => (
              <div className='col-lg-2 col-sm-6 col-md-4' key={staff.id}>
                <RenderStaffItem staff={staff} />
              </div>
            ))
          : 'No staff'}
      </div>
    </div>
  );
};

export default Stafflist;
