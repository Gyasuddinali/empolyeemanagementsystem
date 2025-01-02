import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faPerson} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#ffe4bc'}}>
      <div className="container">
        <span className="navbar-brand fw-bold">Employee Management System</span>
        <div className="navbar-nav btn-group">
         <button className='btn btn-primary'><a className="nav-link active text-white" href="/add"><FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>Add Employee</a></button>
        
        <button className='btn btn-success'><a className="nav-link active text-white" href="/"><FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>Employee Data</a></button>
  </div>

      </div>
    </nav>
    </div>
  );
}

export default Header;

