import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Employform() {

  const [formData, setFormData] = useState({
    name: '', age: '', email: '', department: '', mobile: '',password:'', location: '', description: ''
  });
  
  const navigate = useNavigate();  


  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

   const handleSubmit=async(event)=> {
    event.preventDefault();

    //fetch("http://localhost:5000/api/employees", {
      await fetch('https://empolyserver.vercel.app/api/employees',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        
          toast.success("Empoly Data Add Successfully!", {
                  position: "top-center",
                  style: {
                    fontSize: '20px',   
                    padding: '25px',    
                    width: '400px',   
                  },
                });
          navigate("/");
        
      })
  console.log(formData);
  
  }


  

  return (
    <div className="container mt-4">
       <ToastContainer></ToastContainer>
      <h1 className="mb-4 text-center bg-primary text-white">Add Employee</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
          </div>

          <div className="col-sm-12 col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
              required
            />
          </div>

          <div className="col-sm-12 col-md-6 mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="col-sm-12 col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              placeholder="Department"
              required
            />
          </div>

          <div className="col-sm-12 col-md-6 mb-3">
            <input
              type="tel"
              className="form-control"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Mobile"
              required
            />
          </div>

        

          <div className="col-sm-12 col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Location"
              required
            />
          </div>

          <div className="col-sm-12 col-md-6 mb-3">
            <textarea
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
              required
            />
          </div>
      

        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Employee
        </button>
      </form>

    </div>
  );
}

export default Employform;



//this code for add data with profile picture


// import React, { useState, useEffect } from 'react';

// function Employform() {
//   const [employees, setEmployees] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '', age: '', email: '', department: '', mobile: '', location: '', description: '', image:''
//   });
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);
  
//   async function fetchEmployees() {
//     await fetch('http://localhost:5000/api/employees', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(response => response.json())
//       .then(data => setEmployees(data))
//       .catch(error => console.error('Error fetching employees:', error));
//   }
  

//   function handleInputChange(event) {
//     const { name, value, type, files } = event.target;
//     if (type === 'file') {
//       setFormData(prevData => ({
//         ...prevData,
//         [name]: files[0] // Save the file object
//       }));
//     } else {
//       setFormData(prevData => ({
//         ...prevData,
//         [name]: value
//       }));
//     }
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     const form = new FormData();
  
//     for (const key in formData) {
//       form.append(key, formData[key]);
//     }

  
//   }

//   async function createEmployee(form) {
//     //await fetch('http://localhost:5000/api/employees', {
//      await fetch('https://empolyserver.vercel.app/api/employees',{
//       method: "POST",
//       body: form
//     })

//       .then(response => response.json())
//       .then(() => {
//         alert("Empolyee Add")
        
//       })
//       .catch(error => console.error('Error creating employee:', error));
//   }
 


//   return (
//     <div className="container mt-4">
//       <h1 className="mb-4 text-center">Employee Management</h1>
      
//       <form onSubmit={handleSubmit} className="mb-4" encType="multipart/form-data">
//         <div className="row">
//           <div className="col-sm-12 col-md-6 mb-3">
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Name"
//               required
//             />
//           </div>

//           <div className="col-sm-12 col-md-6 mb-3">
//             <input
//               type="number"
//               className="form-control"
//               name="age"
//               value={formData.age}
//               onChange={handleInputChange}
//               placeholder="Age"
//               required
//             />
//           </div>

//           <div className="col-sm-12 col-md-6 mb-3">
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Email"
//               required
//             />
//           </div>

//           <div className="col-sm-12 col-md-6 mb-3">
//             <input
//               type="text"
//               className="form-control"
//               name="department"
//               value={formData.department}
//               onChange={handleInputChange}
//               placeholder="Department"
//               required
//             />
//           </div>

//           <div className="col-sm-12 col-md-6 mb-3">
//             <input
//               type="tel"
//               className="form-control"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleInputChange}
//               placeholder="Mobile"
//               required
//             />
//           </div>

//           <div className="col-sm-12 col-md-6 mb-3">
//             <input
//               type="text"
//               className="form-control"
//               name="location"
//               value={formData.location}
//               onChange={handleInputChange}
//               placeholder="Location"
//               required
//             />
//           </div>

//           <div className="col-sm-12 col-md-6 mb-3">
//             <textarea
//               className="form-control"
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               placeholder="Description"
//               required
//             />
//           </div>

//           <div className="col-sm-12 col-md-6 mb-3">
//             <input
//               type="file"
//               className="form-control"
//               name="image"
//               onChange={handleInputChange}
//               accept="image/*"
//             />
//           </div>
//         </div>

//         <button type="submit" className="btn btn-primary w-100">
//           {editingId ? 'Update Employee' : 'Add Employee'}
//         </button>
//       </form>

//       {/* <div className="row">
//         {employees.map(employee => (
//           <div key={employee.id} className="col-sm-12 col-md-4 mb-4">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{employee.name}</h5>
//                 <p className="card-text">Age: {employee.age}</p>
//                 <p className="card-text">Email: {employee.email}</p>
//                 <p className="card-text">Department: {employee.department}</p>
//                 <p className="card-text">Mobile: {employee.mobile}</p>
//                 <p className="card-text">Location: {employee.location}</p>
//                 <p className="card-text">Description: {employee.description}</p>
//                 {employee.image && <img src={`/${employee.image}`} alt="Employee" className="img-fluid mb-3" />}
                
//               </div>
//             </div>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// }

// export default Employform;
