import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentPos } from "store/map";

export default function useCurrentPos() {
  const dispatch = useDispatch();

  function success({ coords }) {
    const Lat = coords.latitude;
    const Lng = coords.longitude;

    dispatch(getCurrentPos({ Lat, Lng }));
  }
  useEffect(() => {
    if (!navigator.geolocation) throw "위치 정보가 지원되지 않습니다.";
    navigator.geolocation.watchPosition(success);
  });
}
