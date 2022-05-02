import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from "./components/home";
import About from "./components/about";

import CreateStudent from "./components/student/CreateStudent";
import ReadStudent from "./components/student/ReadStudent";
import UpdateStudent from "./components/student/UpdateStudent";

import CreateProfessor from "./components/professor/CreateProfessor";
import ReadProfessor from "./components/professor/ReadProfessor";
import UpdateProfessor from "./components/professor/UpdateProfessor";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>CRUD</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Estudante
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li className="navitem">
                  <Link to="/createStudent" className="nav-link">Criar Estudante</Link>
                </li>
                <li className="navitem">
                  <Link to="/readStudent" className="nav-link">Listar Estudante</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Professor
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li className="navitem">
                  <Link to="/createProfessor" className="nav-link">Criar Professor</Link>
                </li>
                <li className="navitem">
                  <Link to="/readProfessor" className="nav-link">Listar Professor</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/createStudent" element={<CreateStudent />} />
        <Route path="/updateStudent/:id" element={<UpdateStudent />} />
        <Route path="/readStudents" element={<ListStudent />} />
        <Route path="/createProfessor" element={<CreateProfessor />} />
        <Route path="/updateProfessor/:id" element={<UpdateProfessor />} />
        <Route path="/readProfessors" element={<ListProfessor />} />
      </Routes>
    </div>
  );
}

export default App