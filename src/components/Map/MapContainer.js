/* global kakao */
import useCurrentPos from "hooks/useCurrentPos";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import overlay from "styles/overlay";
import { countNear } from "../../store/map";

const MapBlock = styled.div`
  width: 100%;
  height: 100%;
`;

const MapContainer = ({ toilet }) => {
  useCurrentPos();
  const { currentPos } = useSelector((state) => state.map);
  const dispatch = useDispatch();
  const near = useRef(0);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(currentPos.Lat, currentPos.Lng),
      level: 3,
    };
    near.current = 0;
    const map = new kakao.maps.Map(container, options);

    // currentMarker
    const currentImageSrc = "/img/pngwing.com.png";
    const currentImageSize = new kakao.maps.Size(40, 40);
    const currentPosition = new kakao.maps.LatLng(
      currentPos.Lat,
      currentPos.Lng
    );

    const currentMarker = new kakao.maps.Marker({
      map,
      image: new kakao.maps.MarkerImage(currentImageSrc, currentImageSize),
      position: currentPosition,
    });
    const currentOverlay = new kakao.maps.CustomOverlay({
      map,
      position: currentPosition,
      content: `<div>현재 위치</div>`,
      yAnchor: 0,
      zIndex: 30,
      clickable: true,
    });
    // markers
    const markers = toilet.map((item) => {
      const position = new kakao.maps.LatLng(item.lat, item.lng);
      const content = `<div class="customOverlay" style="${overlay.wrapper}">
            <h4>${item.gu_nm} ${item.hnr_nam}</h4>
            <p>${item.masterno}-${item.slaveno}</p>
        </div>`;
      const marker = {
        marker: new kakao.maps.Marker({
          position,
          clickable: true,
        }),
        overlay: new kakao.maps.CustomOverlay({
          position,
          content,
          yAnchor: 0,
          zIndex: 30,
          clickable: true,
        }),
      };
      return marker;
    });

    markers.forEach(({ marker, overlay }) => {
      const c1 = map.getCenter();
      const c2 = marker.getPosition();
      const ploy = new kakao.maps.Polyline({
        path: [c1, c2],
      });
      const dist = ploy.getLength();
      if (dist < 1000) {
        marker.setMap(map);
        near.current += 1;
        dispatch(countNear({ near: near.current }));
        overlay.setMap(map);
        overlay.setVisible(false);
        kakao.maps.event.addListener(marker, "click", () =>
          overlay.setVisible(!overlay.getVisible())
        );
      } else {
        marker.setMap(null);
      }
    });
  }, [currentPos]);
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0fac577152414996dc9e2d92bd283bb3"
        ></script>
        <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0fac577152414996dc9e2d92bd283bb3&libraries=services"></script>
      </Head>
      <MapBlock id="map" />
    </>
  );
};

export default MapContainer;
