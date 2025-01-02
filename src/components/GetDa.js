
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faBriefcase, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// export default function EmployeeTable() {
//   const [employees, setEmployees] = useState([]);  // State for employees
//   const [selectedEmployee, setSelectedEmployee] = useState(null);  // State for selected employee

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   async function fetchEmployees() {
//     try {
//       const response = await fetch('http://localhost:5000/api/employees');
//       const data = await response.json();
//       setEmployees(data);
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//     }
//   }

//   async function deleteEmployee(id) {
//     try {
//       await fetch(`http://localhost:5000/api/employees/${id}`, {
//         method: 'DELETE',
//       });
//       setEmployees(employees.filter(emp => emp._id !== id));
//       setSelectedEmployee(null);
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   }


//   return (
//     <div className="container-fluid py-4">
//       <h1 className="mb-4">Employee Management</h1>

//       <div className="row">
//         {/* Table View */}
//         <div className="col-md-8">
//           <div className="table-responsive">
//             <table className="table table-bordered table-hover">
//               <thead className="table-light">
//                 <tr>
//                   <th>Name</th>
//                   <th>Department</th>
//                   {/* <th>Email</th> */}
//                   <th>Location</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {employees.map((employee) => (
//                   <tr key={employee._id}>
//                     <td>{employee.name}</td>
//                     <td>{employee.department}</td>
//                     {/* <td>{employee.email}</td> */}
//                     <td>{employee.location}</td>
//                     <td>
//                       <button
//                         className="btn btn-sm btn-primary me-2"
//                         onClick={() => setSelectedEmployee(employee)}
//                       >
//                         View
//                       </button>
//                       <a 
//                         href={`/update/${employee._id}`}
//                         className="btn btn-sm btn-warning me-2"
//                       >
//                         Edit
//                       </a>
//                       <button
//                         className="btn btn-sm btn-danger"
//                         onClick={() => deleteEmployee(employee._id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Card View for Selected Employee */}
//         <div className="col-md-4">
//           {selectedEmployee && (
//             <div className="card">
//               <div className="card-body">
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <h2 className="card-title mb-0">Employee Details</h2>
//                   <div>
//                     <a href={`/update/${selectedEmployee._id}`} className="btn btn-primary btn-sm me-2">Edit</a>
//                     <button className="btn btn-danger btn-sm" onClick={() => deleteEmployee(selectedEmployee._id)}>Delete</button>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center mb-3">
//                   <div className="me-3">
//                     {selectedEmployee.image ? (
//                       <img
//                         src={selectedEmployee.image}
//                         alt={selectedEmployee.name}
//                         className="rounded-circle"
//                         style={{ width: '60px', height: '60px', objectFit: 'cover' }}
//                       />
//                     ) : (
//                       <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
//                         <span className="fs-4">{selectedEmployee.name[0]}</span>
//                       </div>
//                     )}
//                   </div>
//                   <div>
//                     <h3 className="mb-0">{selectedEmployee.name}</h3>
//                     <p className="text-muted mb-0">Age: {selectedEmployee.age}</p>
//                   </div>
//                 </div>
//                 <div className="mb-2">
//                   <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                   <strong>Email:</strong> {selectedEmployee.email}
//                 </div>
//                 <div className="mb-2">
//                   <FontAwesomeIcon icon={faBriefcase} className="me-2" />
//                   <strong>Department:</strong> {selectedEmployee.department}
//                 </div>
//                 <div className="mb-2">
//                   <FontAwesomeIcon icon={faPhone} className="me-2" />
//                   <strong>Mobile:</strong> {selectedEmployee.mobile}
//                 </div>
//                 <div className="mb-2">
//                   <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
//                   <strong>Location:</strong> {selectedEmployee.location}
//                 </div>
//                 <div className="mt-3">
//                   <strong>Description:</strong>
//                   <p>{selectedEmployee.description}</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBriefcase, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'
import { EyeIcon, Pen, Trash } from 'lucide-react';
export default function GetDa() {
  const [employees, setEmployees] = useState([]);  // State for employees
  const [selectedEmployee, setSelectedEmployee] = useState(null);  // State for selected employee
  const [showCard, setShowCard] = useState(true); // State to control the visibility of the card

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    try {
     // const response = await fetch('http://localhost:5000/api/employees');
     const response = await fetch('https://empolyserver.vercel.app/api/employees');
     const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }

  async function deleteEmployee(id) {
    const isConfirmed = window.confirm("Are you sure you want to delete this employee?");
    if (isConfirmed) {
    try {
     // await fetch(`http://localhost:5000/api/employees/${id}`, {
      await fetch(`https://empolyserver.vercel.app/api/employees/${id}`,{
     method: 'DELETE',
      });
      setEmployees(employees.filter(emp => emp._id !== id));
      setSelectedEmployee(null);
      //alert("Data delete successfully")
      toast.success("Empoly Data Delete Success!", {
        position: "top-center",
        style: {
          fontSize: '20px',   
          padding: '25px',    
          width: '400px',   
        },
      });
      setShowCard(false); 
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  }
  }
  // Function to close the employee details card
  const closeCard = () => {
    setShowCard(false);
    setSelectedEmployee(null);
  };

  // Function to view the selected employee
  const viewEmployee = (employee) => {
    setSelectedEmployee(employee);
    setShowCard(true);  // Make sure the card is visible when selecting an employee
  };

  return (
    <div className="container-fluid py-4">

      <ToastContainer></ToastContainer>
      <h1 className="mb-4">Employee Management</h1>

      <div className="row">
        {/* Table View */}
        <div className="col-md-8">
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee._id}>
                    <td>{employee.name}</td>
                    <td>{employee.department}</td>
                    <td>{employee.location}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => viewEmployee(employee)} // Use the viewEmployee function to select an employee
                      >
                        View<EyeIcon></EyeIcon>
                      </button>
                      <a 
                        href={`/update/${employee._id}`}
                        className="btn btn-sm btn-warning me-2"
                      >
                        Edit<Pen></Pen>
                      </a>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteEmployee(employee._id)}
                      >
                        Delete<Trash></Trash>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Card View for Selected Employee */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          {showCard && selectedEmployee && (
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="card-title mb-0">Employee Details</h2>
                  <div>
                    <a href={`/update/${selectedEmployee._id}`} className="btn btn-primary btn-sm me-2">Edit</a>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteEmployee(selectedEmployee._id)}>Delete</button>
                    <button className="btn btn-secondary btn-sm" onClick={closeCard}>Close</button> {/* Close button */}
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    {selectedEmployee.image ? (
                      <img
                        src={selectedEmployee.image}
                        alt={selectedEmployee.name}
                        className="rounded-circle"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                        <span className="fs-4">{selectedEmployee.name[0]}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="mb-0">{selectedEmployee.name}</h3>
                    <p className="text-muted mb-0">Age: {selectedEmployee.age}</p>
                  </div>
                </div>
                <div className="mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  <strong>Email:</strong> {selectedEmployee.email}
                </div>
                <div className="mb-2">
                  <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                  <strong>Department:</strong> {selectedEmployee.department}
                </div>
                <div className="mb-2">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  <strong>Mobile:</strong> {selectedEmployee.mobile}
                </div>
                <div className="mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                  <strong>Location:</strong> {selectedEmployee.location}
                </div>
                <div className="mt-3">
                  <strong>Description:</strong>
                  <p>{selectedEmployee.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}






