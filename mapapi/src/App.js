import './App.css';
//import { Router } from 'react-router-dom'
import MapPage from '../src/pages/MapPage';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailPage from '../src/pages/DetailPage'
import { useEffect, useState } from 'react';
import markerdata from '../src/data/markerData';


//import { DetailPage } from '../src/pages'


function App() {
  const [photos, setPhotos] = useState([]);

  let [detaildata] = useState(markerdata);
  
  //const [Detail] = useState(markerData);
  const navigate = useNavigate();

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
    .then(response => response.json())
    .then(result => setPhotos(result))
    .catch(error => console.log('error'.error))
  }, [])





  return (
    <div className="App">

      
       <Navbar bg="dark" variant="dark">

        
       <h1><img src="/NDS.png" alt="logo"/></h1>
      

       
       <br />
      <Container>
      <Navbar.Brand href="/">NDS</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>Back</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/DetailPage')}}>DetailPage</Nav.Link>
            {/* <Nav.Link to="/DetailPage">Features</Nav.Link>
            <Nav.Link href="/DetailPage">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      
      
      <Routes>
        <Route path="/" element={<MapPage/>} />
         <Route path="/DetailPage/:id" element={<DetailPage detaildata={detaildata}  /> }/>
        <Route path="*" element={<div><h1>없는 페이지입니다.</h1></div>} />
       </Routes>



    </div>


    

  );
}

export default App;
