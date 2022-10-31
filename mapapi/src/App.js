import './App.css';
//import { Router } from 'react-router-dom'
import MapPage from '../src/pages/MapPage';
import { Navbar, Container, Nav } from 'react-bootstrap';

//import { DetailPage } from '../src/pages'


function App() {
  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
       
       <br />
      <Container>
      <Navbar.Brand href="#home">NDS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <MapPage/>
      

    </div>

    

  );
}

export default App;
