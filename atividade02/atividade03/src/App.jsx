import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Dropdown, Nav, NavDropdown } from 'react-bootstrap'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Home from './components/Home'
import About from './components/About'

import Read from './components/professor/Read'
import Create from './components/professor/Create'
import Update from './components/professor/Update'

import ReadAlun from './components/aluno/ReadAlun'
import CreateAlun from './components/aluno/CreateAlun'
import UpdateAlun from './components/aluno/UpdateAlun'


function App() {

  return (
    <div className="container" >
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to="/" className='navbar-brand dropdawn-menu' style={{ padding: 5 }}>UFC</Link>
        <div className='dropdawn-menu' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='dropdawn-item' >
              <Link to="/" className='nav-link'>
                Inicio
              </Link>
            </li>
            <li className='navitem'>
              <Link to="about" className='nav-link'>
                Sobre
              </Link>
            </li>
            <li>
              <Nav>
                <NavDropdown id="nav-dropdown-dark-example" menuVariant="dark" title="Estudante">
                  <NavDropdown.Item href="/read_alun">Ver Aluno</NavDropdown.Item>
                  <NavDropdown.Item href="/crate_alun">Criar Aluno</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </li>
            <li>
              <Nav>
                <NavDropdown id="nav-dropdown-dark-example" menuVariant="dark" title="Professor">
                  <NavDropdown.Item href="/read">Ver Aluno</NavDropdown.Item>
                  <NavDropdown.Item href="/crate">Criar Aluno</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />

        <Route path='create_alun' element={<CreateAlun />} />
        <Route path='read_alun' element={<ReadAlun />} />
        <Route path='update_alun/:id' element={<UpdateAlun />} />

        <Route path='create_prof' element={<Create />} />
        <Route path='read_prof' element={<Read />} />
        <Route path='update_Prof/:id' element={< Update />} />
      </Routes>
    </div>
  )
}

export default App
