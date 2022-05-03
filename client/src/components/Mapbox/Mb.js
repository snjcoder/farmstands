import React, { Fragment } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaStore } from "react-icons/fa";
import { useState } from "react";
import farmsData from "../data/farmsData.json";
import { useEffect } from "react";
import Searchbox from "../Navbar/Searchbox";

function Mapbox(props) {
  const [long, setLong] = useState(-114.0719);
  const [lat, setLat] = useState(51.0447);
  const [zoom, setZoom] = useState(12);
  const [searchCommunity, setSearchCommunity] = useState();
  const [viewState, setViewState] = useState({
    longitude: -114.0719,
    latitude: 51.0447,
    zoom: zoom,
  });

  //Search Parks
  useEffect(() => {
    if (searchCommunity > -1) {
      let community = farmsData[searchCommunity];
      let commLat = parseFloat(community.point.coordinates[1]);
      let commLong = parseFloat(community.point.coordinates[0]);

      setViewState((cur) => {
        return {
          ...cur,
          zoom: 13,
          latitude: commLat,
          longitude: commLong,
        };
      });
      console.log(`${commLat},${commLong}`);
    }
  }, [searchCommunity]);

  return (
    <Fragment>
      <Map
        initialViewState={{
          // longitude: props.long,
          // latitude: props.lat,
          // zoom: 14,
          longitude: long,
          latitude: lat,
          zoom: 14,
        }}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <Searchbox setSearchCommunity={setSearchCommunity} />
        <Marker longitude={props.long} latitude={props.lat} anchor="bottom">
          <FaStore style={{ fontSize: "30px" }} />
        </Marker>
      </Map>
    </Fragment>
  );
}

export default Mapbox;
