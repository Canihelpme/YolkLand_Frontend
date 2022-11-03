import React from 'react';
import Users from '../Users/Users'
export const DetailPage = () => {


    return(

        <div className="container">
        <div className="row">
          <div className="col-md-6">
          <div>
            <dl>
                <dt>위치</dt>
                <dd>성수동 1가 2동</dd>
            </dl>
            <dl>
                <dt>업종</dt>
                <dd>성수동 1가 2동</dd>
            </dl>
            <dl>
                <dt>기존분기</dt>
                <dd>성수동 1가 2동</dd>
            </dl>
          </div>
      <div>
      <ul className="list_reportItem">
								<li className="summary">가구세대 수 <strong>6,503가구</strong> 입니다.</li>

								<li className="contrast">
									<p>
										<span>전년 동분기 대비</span>
										<strong className="" >0가구</strong>
									</p>
									
									<p>
										<span>전분기 대비</span>
										<strong className="">0가구</strong>
									</p>
								</li>
							
								<li className="detail"><strong>성수1가2동</strong>은 가구세대가 전년대비 <strong>동일</strong>하고, 아파트가구가 일반가구보다 (%P3)습니다.   </li>
							
								<li className="graph">
								
									<div className="chartArea" >
										
										<p className="title">가구세대 수 추이</p>
									
										<span className="unit">단위 : 가구</span>
									</div>
								</li>

                <li className="response">
                  <Users/>
                </li>
							</ul>

      </div>

          </div>
        </div>
      </div>
       
    )
};

export default DetailPage;