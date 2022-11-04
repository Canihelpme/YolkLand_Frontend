import React, { useState, useEffect } from "react";
import  markerdata  from "../data/markerData";
//import { chicken } from "../data/chicken.json"
import { Button } from 'react-bootstrap';
//import $ from 'jquery';
//import ch from '../data/chicken.json';

//import { Link } from "react-router-dom";

const { kakao } = window;



//모달창 노출시키기!!!
export const MapPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [detaildata] = useState(markerdata);

 

  


  useEffect(() => {

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.51050550931772, 127.04377181551656),
      level: 6
    };

    const areas = [
      {
          name : '강남구 좌표',
          path : [
              new kakao.maps.LatLng(37.52536182730739, 127.00880135019838),
              new kakao.maps.LatLng(37.53394747283745, 127.01702769968459),
              new kakao.maps.LatLng(37.53567673674301, 127.02110125789002),
              new kakao.maps.LatLng(37.53562715062581, 127.03894395739334),
              new kakao.maps.LatLng(37.53418315103791, 127.04564116615003),
              new kakao.maps.LatLng(37.52974710483126, 127.05310534046873),
              new kakao.maps.LatLng(37.52891760712872, 127.0543718448119),
              new kakao.maps.LatLng(37.523792992368094, 127.06776218582748),
              new kakao.maps.LatLng(37.50249130287055, 127.07109049318751),
              new kakao.maps.LatLng(37.501294849552316, 127.08208185726892),
              new kakao.maps.LatLng(37.49670819133572, 127.0948327822731),
              new kakao.maps.LatLng(37.490679039224425, 127.10703731571687),
              new kakao.maps.LatLng(37.46619138051929, 127.12368689395005),
              new kakao.maps.LatLng(37.461693414823614, 127.11671672332808),
              new kakao.maps.LatLng(37.45971087926744, 127.11703012272085),
              new kakao.maps.LatLng(37.45956972214661, 127.11395552352789),
              new kakao.maps.LatLng(37.461697578982665, 127.11242151944995),
              new kakao.maps.LatLng(37.46246032038326, 127.1060475999367),
              new kakao.maps.LatLng(37.46231796702275, 127.10401280858602),
              new kakao.maps.LatLng(37.459939735753515, 127.10351218589622),
              new kakao.maps.LatLng(37.45630356210077, 127.09894101484939),
              new kakao.maps.LatLng(37.456523250082256, 127.09473680846891),
              new kakao.maps.LatLng(37.46113595467153, 127.09533038894325),
              new kakao.maps.LatLng(37.46258011786232, 127.09212207953667),
              new kakao.maps.LatLng(37.46604048966222, 127.09149331018712),
              new kakao.maps.LatLng(37.47119916076072, 127.08494291901621),
              new kakao.maps.LatLng(37.47541640183342, 127.08422415552042),
              new kakao.maps.LatLng(37.4752413710154, 127.07662684618586),
              new kakao.maps.LatLng(37.47218081258844, 127.07205659582957),
              new kakao.maps.LatLng(37.469016234091974, 127.06383816481076),
              new kakao.maps.LatLng(37.46901808365369, 127.05573016323662),
              new kakao.maps.LatLng(37.46797481982791, 127.05152425061299),
              new kakao.maps.LatLng(37.46959671751539, 127.05134449373311),
              new kakao.maps.LatLng(37.47010241243264, 127.04867698814878),
              new kakao.maps.LatLng(37.47161515663092, 127.050938905754),
              new kakao.maps.LatLng(37.4775282372333, 127.04488313141131),
              new kakao.maps.LatLng(37.48571071510679, 127.04126984781159),
              new kakao.maps.LatLng(37.48470389198162, 127.03403303446866),
              new kakao.maps.LatLng(37.51303465740248, 127.02047278062795),
              new kakao.maps.LatLng(37.52179284995522, 127.01776023334823),
              new kakao.maps.LatLng(37.52516299643754, 127.01488759138671),
              new kakao.maps.LatLng(37.52305487257308, 127.0130093072706)
          ]
      },
  ];
      
    const map = new kakao.maps.Map(container, options);

    //마커 이미지
    const imageSrc = 'NDS4.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(60, 60), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)};
    


    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    Position = new kakao.maps.LatLng(37.54699, 127.09598);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성
    const mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


  
// 마커 클러스터러를 생성합니다
    const clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 7 // 클러스터 할 최소 지도 레벨
});


const markers = []; //마커 크러스터


    markerdata.map((el, i) => {
       
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({

        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        image : markerImage
      });
      // 마커에 표시할 인포윈도우를 생성합니다
      var InfoWindow = new kakao.maps.InfoWindow({
        content: el.place,
      });

      //투명도 조절
      marker.setOpacity(0.45);

      // 마커에 클릭 이벤트를 등록한다 (우클릭 : rightclick)
      kakao.maps.event.addListener(marker, 'click', function () {
        console.log(marker)

        const iwContent = '<div className="overlaybox" style="padding:5px; height:55px;">' + el.place + '<br> <a href="/DetailPage/' + el.seq + '"' + 'style="color:blue" target="_blank">상세보기</a> '+'</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        // 인포윈도우를 생성하고 지도에 표시합니다
        const InfoWindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
         
        });
        InfoWindow.open(map, marker);
        

        
      });      
      markers.push(marker); //마커 크러스터

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, InfoWindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(InfoWindow)
      );


      clusterer.addMarkers(markers);//마커크러스터
    });
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, InfoWindow) {
      return function () {
        InfoWindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다.
    function makeOutListener(InfoWindow) {
      return function () {
        InfoWindow.close();
      };
    }

    // 지도에 영역데이터를 폴리곤으로 표시합니다 
for (var i = 0, len = areas.length; i < len; i++) {
  displayArea(areas[i]);
}

// 다각형을 생상하고 이벤트를 등록하는 함수
function displayArea(area) {

  // 다각형을 생성합니다 
  const polygon = new kakao.maps.Polygon({
      map: map, // 다각형을 표시할 지도 객체
      path: area.path,
      strokeWeight: 2.5,
      strokeColor: '#00008C',
      strokeOpacity: 0.9,
      
  });
}

  },[]);

  return (
    <div>
      <input type="text" className="form-control" id="keyword" placeholder="키워드"></input>
      {/* <span>최근 키워드</span>

      <button onClick={() => setModalVisible((prevState) => !prevState)}>보임</button>
      {modalVisible && <div>모달창 띄우기</div>}


      <button type="button" className="btn btn -lg btn-primary" onClick="keywordSearh()">검색</button> */}

      <section id="category">
        <div className="inner">
          <div className="category-container">
            <div className="category-list">
              <button className="category-item" id="korea">추출</button>
              <button className="category-item" id="china">매출</button>
              <button className="category-item" id="japan">인구</button>
              <button className="category-item" id="america">지역</button>

            </div>
          </div>
        </div>
      </section>
      <>
        <div id="map" style={{ width: '98.9vw', height: '70vh' }}></div>

        {/* <button Link to="/DeatailPage">시작</button>
        <p>{detaildata[0].place}</p>
        <Button variant="primary">Primary</Button>
        <Button variant="success" Link to="/DeatailPage">Success</Button> */}
      </>





    </div>
  );
};

export default MapPage;