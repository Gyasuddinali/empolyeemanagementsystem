
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
export default function EmpolyEdit() {

    const [formData, setFormData] = useState({
        name: '', age: '', email: '', department: '', mobile: '', location: '', description: ''
      });
      const {id}=useParams();
       const navigate = useNavigate();  

      function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      }
    
      useEffect(() => {
      
        //axios.get(`http://localhost:5000/api/employees/${id}`)
        axios.get(`https://empolyserver.vercel.app/api/employees/${id}`)
          .then((data1) =>{
console.log("beffore updating",data1.data)
setFormData(data1.data)
console.log("after updating data",data1.data)
          })
        
          .catch((error)=>{
console.log(error)
          })
      }, [id]);




     const handleSubmit=async(event)=> {
        event.preventDefault();
       await fetch(`https://empolyserver.vercel.app/api/employees/${id}`, {
            method: 'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData)
          })
            .then((response) => {
              alert("Data Updated Successfully")
              navigate('/')
            }
          )
           
            .catch(error => console.error('Error creating employee:', error));
      }

  return (
    <div className="container mt-4">
    <h1 className="mb-4 text-center bg-primary text-white">Update Employee Details</h1>
    
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
        Update Employee
      </button>
    </form>
    </div>
  )
}


//from here for edit empoly with image


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// function EmpolyEdit() {
//   const [employee, setEmployee] = useState({
//     name: '', age: '', email: '', department: '', mobile: '', location: '', description: '', image: ''
//   });
//   const [formData, setFormData] = useState({
//     name: '', age: '', email: '', department: '', mobile: '', location: '', description: '', image: ''
//   });
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams(); 
//   const navigate = useNavigate();  
//   useEffect(() => {
//     // Fetch the current employee data based on the ID
//     async function fetchEmployeeData() {
//       // await fetch(`http://localhost:5000/api/employees/${id}`, {
//         await fetch(`https://empolyserver.vercel.app/api/employees${id}`,{
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//         .then(response => response.json())
//         .then(data => {
//           setEmployee(data);
//           setFormData({
//             name: data.name,
//             age: data.age,
//             email: data.email,
//             department: data.department,
//             mobile: data.mobile,
//             location: data.location,
//             description: data.description,
//             image: data.image || ''
//           });
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching employee data:', error);
//           setLoading(false);
//         });
//     }

//     fetchEmployeeData();
//   }, [id]);

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
    
//     // Append all form fields to FormData
//     for (const key in formData) {
//       form.append(key, formData[key]);
//     }

//     // Update the employee data
//     updateEmployee(form);
//   }

//   // Update employee (PUT request)
//   async function updateEmployee(form) {
//     form.append('id', id); // Add the employee ID to the form data

//     // await fetch(`http://localhost:5000/api/employees/${id}`, {
//       await fetch(`https://empolyserver.vercel.app/api/employees${id}`,{
//       method: 'PUT',
//       body: form,
//     })
//       .then(response => response.json())
//       .then(() => {
//         alert("Successfully Updated Data")
//         
//         navigate('/');
//       })
//       .catch(error => console.error('Error updating employee:', error));
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mt-4">
//       <h1 className="mb-4 text-center">Update Employee</h1>

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
//           Update Employee
//         </button>
//       </form>
//     </div>
//   );
// }

// export default EmpolyEdit;
