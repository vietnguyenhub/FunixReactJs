import React, { useState } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import Stafflist from './StaffComponent';
import { STAFFS } from '../shared/staffs';
import StaffDetail from './StaffDetailComponent';
import { useParams } from 'react-router-dom';
import { DEPARTMENTS } from '../shared/staffs';
import Departlist from './DepartmentComponent';
import Salarylist from './SalaryComponent';

function Main(props) {
  /// sử dụng useState để khai báo state trong function component
  const [staffs, setStaffs] = useState(STAFFS);
  const [departments, setDepartments] = useState(DEPARTMENTS);

  // Tạo hàm onAddStaff 
  const onAddStaff = newStaff => {
    console.log(
      newStaff
    );
    setStaffs(prevStaffs => prevStaffs.concat(newStaff));
  };

  const StaffWithId = () => {
    let { staffId } = useParams();
    return (
      <StaffDetail
        staff={
          staffs.filter(
            staffmember => staffmember.id === parseInt(staffId, 10)
          )[0]
        }
      />
    );
  };
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Routes>
        <Route
          path='/staffMember'
          element={<Stafflist staffs={staffs} handleAddStaff={onAddStaff} />} // sử dụng hàm handleAddStaff được truyền từ staffComponent
        />
        <Route path='/staffMember/:staffId' element={<StaffWithId />} />
        <Route
          path='/department'
          element={<Departlist departments={departments} />}
        />
        <Route path='/salary' element={<Salarylist staffs={staffs} />} />
        <Route path='/' element={<Navigate replace to='/staffMember' />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default Main;
