import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import styled from 'styled-components';

function Areas() {
  const [areas, setareas] = useState([]);

  
  useEffect(() => {
     
    // const res = fetchUsers(2110824);
    // setareas(res.data)
    fetchAreas().then(result=>setareas(result.data.data))

    
  }, []);

  const fetchAreas = async (code) => {
      return await axios.get(`http://1027-alb-1456013350.ap-northeast-2.elb.amazonaws.com/api/apt/${code}`)
      }

  return (
    <div>
      {areas.map((data)=><div>{[data.year+"년 ",data.quarter+"분기", data.con,]}</div>)}

      </div>

  );
}

export default Areas;