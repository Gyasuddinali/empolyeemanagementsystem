
// import { useState } from 'react'
// import { useEffect } from 'react'
// // import { Table } from '@/components/ui/table'
// // import { Button } from '@/components/ui/button'
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogHeader,
// //   DialogTitle,
// // } from '@/components/ui/dialog'
// import { Eye, Pencil, Trash } from 'lucide-react'
// import { Modal } from 'bootstrap'

// // interface Employee {
// //   _id: string
// //   name: string
// //   age: number
// //   email: string
// //   department: string
// //   mobile: string
// //   location: string
// //   description: string
// //   image: string
// // }

// export default function EmployeeTable() {
// //   const [employees, setEmployees] = useState<Employee[]>([])
// const [employees, setEmployees] = useState([])
//   const [selectedEmployee, setSelectedEmployee] = useState()
//   const [showDetails, setShowDetails] = useState(false)

//   // Fetch employees on component mount
//   useEffect(() => {
//     fetchEmployees()
//   }, [])

//   async function fetchEmployees() {
//     try {
//       const response = await fetch('http://localhost:5000/api/employees')
//       const data = await response.json()
//       setEmployees(data)
//     } catch (error) {
//       console.error('Error fetching employees:', error)
//     }
//   }

//   async function deleteEmployee(id) {
//     try {
//       await fetch(`http://localhost:5000/api/employees/${id}`, {
//         method: 'DELETE',
//       })
//       setEmployees(employees.filter(emp => emp._id !== id))
//     } catch (error) {
//       console.error('Error deleting employee:', error)
//     }
//   }

//   function viewEmployee(employee) {
//     setSelectedEmployee(employee)
//     setShowDetails(true)
//   }

//   return (
//     <div className="container mx-auto py-6">
//       <h1 className="text-2xl font-bold mb-6">Employee Management</h1>
      
//       {/* Table View */}
//       <div className="rounded-md border">
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Email</th>
//               <th>Location</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee) => (
//               <tr key={employee._id}>
//                 <td>{employee.name}</td>
//                 <td>{employee.department}</td>
//                 <td>{employee.email}</td>
//                 <td>{employee.location}</td>
//                 <td>
//                   <div className="flex gap-2">
//                     <button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => viewEmployee(employee)}
//                     >
//                       <Eye className="h-4 w-4" />
//                     </button>
//                     <button
//                       variant="ghost"
//                       size="icon"
//                       asChild
//                     >
//                       <a href={`/update/${employee._id}`}>
//                         <Pencil className="h-4 w-4" />
//                       </a>
//                     </button>
//                     <button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => deleteEmployee(employee._id)}
//                     >
//                       <Trash className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Detail View Modal */}
//       <Modal open={showDetails} onOpenChange={setShowDetails}>
//         <Modal.Content className="max-w-3xl">
//           <Modal.Header>
//             <Modal.Title>Employee Details</Modal.Title>
//           </Modal.Header>
//           {selectedEmployee && (
//             <div className="grid gap-6">
//               <div className="flex items-start gap-6">
//                 <div className="w-24 h-24 rounded-full overflow-hidden bg-muted">
//                   {selectedEmployee.image ? (
//                     <img
//                       src={selectedEmployee.image}
//                       alt={selectedEmployee.name}
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center bg-primary/10">
//                       <span className="text-2xl font-bold text-primary">
//                         {selectedEmployee.name[0]}
//                       </span>
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex-1">
//                   <h2 className="text-2xl font-bold mb-2">{selectedEmployee.name}</h2>
//                   <p className="text-muted-foreground">Age: {selectedEmployee.age}</p>
//                 </div>
//               </div>

//               <div className="grid gap-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <h3 className="font-semibold mb-1">Department</h3>
//                     <p>{selectedEmployee.department}</p>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Location</h3>
//                     <p>{selectedEmployee.location}</p>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Email</h3>
//                     <p>{selectedEmployee.email}</p>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Mobile</h3>
//                     <p>{selectedEmployee.mobile}</p>
//                   </div>
//                 </div>
                
//                 <div>
//                   <h3 className="font-semibold mb-1">Description</h3>
//                   <p className="text-muted-foreground">{selectedEmployee.description}</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </Modal.Content>
//       </Modal>
//     </div>
//   )
// }








import { useState, useEffect } from 'react';
import { Eye, Pencil, Trash } from 'lucide-react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBriefcase, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    try {
      const response = await fetch('http://localhost:5000/api/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }

  async function deleteEmployee(id) {
    try {
      await fetch(`http://localhost:5000/api/employees/${id}`, {
        method: 'DELETE',
      });
      setEmployees(employees.filter(emp => emp._id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  }

  function viewEmployee(employee) {
    setSelectedEmployee(employee);
    setShowDetails(true);
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Employee Management</h1>

      {/* Table View */}
      <div className="rounded-md border">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Email</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.email}</td>
                <td>{employee.location}</td>
                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => viewEmployee(employee)}
                      className="btn btn-outline-secondary"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="btn btn-outline-secondary">
                      <a href={`/update/${employee._id}`}>
                        <Pencil className="h-4 w-4" />
                      </a>
                    </button>
                    <button
                      onClick={() => deleteEmployee(employee._id)}
                      className="btn btn-outline-secondary"
                    >
                      <Trash className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Employee Details Modal */}
      <Modal show={showDetails} onHide={() => setShowDetails(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEmployee && (
            <div className="grid gap-6">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-muted">
                  {selectedEmployee.image ? (
                    <img
                      src={selectedEmployee.image}
                      alt={selectedEmployee.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                      <span className="text-2xl font-bold text-primary">
                        {selectedEmployee.name[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedEmployee.name}
                  </h2>
                  <p className="text-muted-foreground">Age: {selectedEmployee.age}</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faBriefcase} className="me-2" />Department</h3>
                    <p>{selectedEmployee.department}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />Location</h3>
                    <p>{selectedEmployee.location}</p>
                  </div>
                  <div>
                    
                    <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faEnvelope} className="me-2" />Email</h3>
                    
                    <p>{selectedEmployee.email}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1"><FontAwesomeIcon icon={faPhone} className="me-2" />Mobile</h3>
                    <p>{selectedEmployee.mobile}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">Description</h3>
                  <p className="text-muted-foreground">{selectedEmployee.description}</p>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetails(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}













