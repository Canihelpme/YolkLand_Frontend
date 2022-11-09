import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import styled from 'styled-components';

function CAreas() {
  const [careas, setcareas] = useState([]);

  
  useEffect(() => {
     
    // const res = fetchUsers(2110824);
    // setareas(res.data)
    fetchCAreas().then(result=>setcareas(result.data.data))
    
  }, []);

  const fetchCAreas = async (code) => {
      return await axios.get(`http://1027-alb-1456013350.ap-northeast-2.elb.amazonaws.com/api/area/`)
      }

  return (
    <div>
      {careas.map((data)=><div>{[data.cadName, data.codeName, data.longitude, data.latitude, data.code]}</div>)}
      

      </div>

  );
}

export default CAreas;