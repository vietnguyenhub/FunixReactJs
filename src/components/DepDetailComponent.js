import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Card, CardImg} from 'reactstrap';


const DepDetailComponent = () => {
  const [staffList, setStaffList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(baseUrl, {
      method: 'GET',
    }).then(response =>
      response.json().then(res => {
        setStaffList(res);
        setIsLoading(false);
      })
    );
  }, [params.departmentId]);

  return (
    <div className="container">
      <div className="row">
            <div  className="col-lg-2 col-sm-6 col-md-4">
            {isLoading
              ? '...Loading'
              : staffList.length > 0
              ? staffList
                  .filter(staff => staff.departmentId === params.departmentId)
                  .map(staff => <div key={staff.id}>
                      <Card>
                        <CardImg width="100%" src={staff.image} alt={staff.name} />
                        <h4>{staff.name}</h4>
                      </Card>
                    </div>
                    
                    
                   )
              : 'No staff'}
            </div>
      </div>
    </div>
    
  );
};

export default DepDetailComponent;
