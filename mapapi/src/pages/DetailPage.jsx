import '../styles/DetailPage.css';
import React, {useState} from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from "styled-components";

//import  markerdata  from "../data/markerData";
import Areas from '../Users/Areas'
import CAreas from '../Users/CAreas'
import axios from 'axios';
import { render } from '@testing-library/react';

export const DetailPage = (props) => {
  
  const [careas, setcareas] = useState([]);

  
  useEffect(() => {
     
    // const res = fetchUsers(2110824);
    // setareas(res.data)
    fetchCAreas().then(result=>setcareas(result.data.data))
    
  }, []);

  const fetchCAreas = async (code) => {
    return await axios.get(`http://1027-alb-1456013350.ap-northeast-2.elb.amazonaws.com/api/area/`)
    }


  let {id} = useParams();
  

    return(
      
<div className='body'>
<div>
      {careas.map((data)=><div>{[careas.cadName]}</div>)}
      

      </div>

        <div>
        <div>
          <div>
          <div>
          <dl>
                <dt><p className="good">2022년 2분기 기준</p></dt>
            </dl>
            <dl><dt><h3 className="title">{props.detaildata[id].codeName}</h3></dt>
                
            </dl>
            <dl className='lines'>
                <dd ><br/><br/><br/><h5>상권은 <a  style={{color : 'blue'}}>{props.detaildata[id].cadName}</a>입니다.</h5></dd><br/>
                <dd><h5>상권 배후지 전체 아파트 가구 세대수는 <a  style={{color : 'blue'}}>{props.detaildata[id].totalAptAmount}</a>가구 입니다. </h5></dd><br/> 
                <dd><h5>직전분기대비 아파트 가격은 <a  style={{color : 'blue'}}>{props.detaildata[id].incDec}</a>입니다. </h5></dd> <br/>
                <dd><h5>가장많은 평수는 <a  style={{color : 'blue'}}>{props.detaildata[id].mostType}</a>입니다.</h5></dd><br/>
                <dd><h5>가장많은 가격대는 <a  style={{color : 'blue'}}>{props.detaildata[id].mostPrice}</a>입니다.</h5></dd><br/><br/><br/>
                    
            </dl>
            

            
          </div>
      <div>
               
							

      </div>

          </div>
        </div>
      </div>
       </div>



      
    )
};

export default DetailPage;