import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import styled from 'styled-components';

function Areas() {
  const [areas, setareas] = useState([]);

  
  useEffect(() => {
     
    // const res = fetchUsers(2110824);
    // setareas(res.data)
    fetchUsers(2110824).then(result=>setareas(result.data.data))
    
  }, []);

  const fetchUsers = async (code) => {
      return await axios.get(`http://localhost:8080/api/apt?code=${code}`)
      }
  
  return (
    <div>
      {areas.map((data)=><div>{[data.year+"년 ",data.quarter+"분기"]}</div>)}
    </div>

  );
}

export default Areas;