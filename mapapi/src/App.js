import './App.css';
//import { Router } from 'react-router-dom'
import MapPage from '../src/pages/MapPage';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailPage from '../src/pages/DetailPage'
import { useState } from 'react';

//import { DetailPage } from '../src/pages'


function App() {




  return (
    <div className="App">

      
       <Navbar bg="dark" variant="dark">

        
       <h1><img src="/NDS.png" alt="logo"/></h1>
      

       
       <br />
      <Container>
      <Navbar.Brand href="/">NDS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link to="/DetailPage">Features</Nav.Link>
            <Nav.Link href="/DetailPage">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      
      <Routes>
        <Route path="/" element={<div ><MapPage/></div>} />

        <Route path="/DetailPage" element={<div ><DetailPage/></div>} />
       </Routes>

    </div>

    

  );
}

export default App;
