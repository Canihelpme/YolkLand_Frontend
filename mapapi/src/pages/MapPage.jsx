import React, { useState, useEffect } from "react";
import { markerdata } from "../data/markerData"
import { Button } from 'react-bootstrap';

//import { Link } from "react-router-dom";



const { kakao } = window;



//모달창 노출시키기!
export const MapPage = () => {
  const [modalVisible, setModalVisible] = useState(false);




  useEffect(() => {

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.496486063, 127.028361548),
      level: 6
    };

    const map = new kakao.maps.Map(container, options);


    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성
    const mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


    //map
    markerdata.forEach((el) => {
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 place
      });
      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: el.place,
      });

      // 마커에 클릭 이벤트를 등록한다 (우클릭 : rightclick)
      kakao.maps.event.addListener(marker, 'click', function () {
        console.log(marker)

        var iwContent = '<div style="padding:5px; height:55px;">' + el.place + el.phone +'</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        // 인포윈도우를 생성하고 지도에 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable
        });
        infowindow.open(map, marker);  
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    });
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다.
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }







  },


    []);

  return (
    <div>


      <input type="text" class="form-control" id="keyword" placeholder="키워드"></input>
      <span>최근 키워드</span>

      <button onClick={() => setModalVisible((prevState) => !prevState)}>보임</button>
      {modalVisible && <div>모달창 띄우기</div>}


      <button type="button" class="btn btn -lg btn-primary" onlick="keywordSearh()">검색</button>

      <section id="category">
        <div class="inner">
          <div class="category-container">
            <div class="category-list">
              <button class="category-item" id="korea">업종</button>
              <button class="category-item" id="china">매출</button>
              <button class="category-item" id="japan">인구</button>
              <button class="category-item" id="america">지역</button>

            </div>
          </div>
        </div>
      </section>
      <>
        <div id="map" style={{ width: '98.9vw', height: '70vh' }}></div>

        <button Link to="/DeatailPage">시작</button>
        <Button variant="primary">Primary</Button>
        <Button variant="success" Link to="/DeatailPage">Success</Button>
      </>





    </div>
  );
};

export default MapPage;