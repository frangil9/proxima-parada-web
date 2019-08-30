import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import stateTravel from '../../../redux/actions/state-travel';

const waypts = [
  { lat: -34.897333, lng: -56.164833 },
  { lat: -34.898445, lng: -56.167383 },
  { lat: -34.9002359, lng: -56.1717010 },
  { lat: -34.900784, lng: -56.173346 },
  { lat: -34.901822, lng: -56.175929 },
  { lat: -34.903433, lng: -56.180032 },
  { lat: -34.904226, lng: -56.182117 },
  { lat: -34.905523, lng: -56.186499 },
  { lat: -34.905805, lng: -56.191531 },
  { lat: -34.906290, lng: -56.196823 }
];

var map, currentPosition, markerCurrentPosition;

class MapContainer extends Component {

  componentDidMount() {
    this.initMap();
    this.intervalMap = setInterval(() => {
      this.initMap();
    }, 5000);
  }

  componentWillUnmount() {
    if (this.intervalMap) {
      clearInterval(this.intervalMap);
    }
  }

  initMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        console.log(pos);
        currentPosition = new window.google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: -34.893474, lng: -56.165168 },
          zoom: 15
        });
        markerCurrentPosition = new window.google.maps.Marker({
          position: currentPosition,
          title: 'Posición actual'
        });
        markerCurrentPosition.setMap(map);

        let stateTravel = {
          isInPolyCentral: this.areaPolyCentral(),
          isInRadiusCircleStop1: this.areaCircleStop1(),
          isInRadiusCircleStop2: this.areaCircleStop2(),
          isInRadiusCircleStop3: this.areaCircleStop3(),
          isInRadiusCircleStop4: this.areaCircleStop4(),
          isInRadiusCircleStop5: this.areaCircleStop5(),
          isInRadiusCircleStop6: this.areaCircleStop6(),
          isInRadiusCircleStop7: this.areaCircleStop7(),
          isInRadiusCircleStop8: this.areaCircleStop8(),
          isInRadiusCircleStop9: this.areaCircleStop9(),
          isInRadiusCircleStop10: this.areaCircleStop10(),
          isInRadiusCircleStop11: this.areaCircleStop11(),
          isInRadiusCircleStop12: this.areaCircleStop12(),
          isInPolyFacultad: this.areaPolyFacultad(),
          isInPolyIntendencia: this.areaPolyIntendencia(),
          isInPolyCagancha: this.areaPolyCagancha(),
          isInPolyIndependencia: this.areaPolyIndependencia(),
          isInPolyDetour: this.areaPolyDetour()
        }
        this.calculateRoute(map);
        const { onStateTravel } = this.props;
        onStateTravel(stateTravel);
      });
    }
  }

  areaCircleStop1 = () => {
    const google = window.google;
    let coordStop1 = new google.maps.LatLng({ lat: -34.893474, lng: -56.165168 });
    let circleStop1 = new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: coordStop1,
      radius: 20
    });
    let isInRadiusCircleStop1 = window.google.maps.geometry.spherical.computeDistanceBetween(currentPosition, circleStop1.getCenter()) <= circleStop1.getRadius();
    return isInRadiusCircleStop1;
  }

  areaCircleStop2 = () => {
    const google = window.google;
    let coordStop2 = new google.maps.LatLng({ lat: -34.897333, lng: -56.164833 });
    let circleStop2 = new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: coordStop2,
      radius: 20
    });
    let isInRadiusCircleStop2 = window.google.maps.geometry.spherical.computeDistanceBetween(currentPosition, circleStop2.getCenter()) <= circleStop2.getRadius();
    return isInRadiusCircleStop2;
  }

  areaCircleStop3 = () => {
    const google = window.google;
    let coordStop3 = new google.maps.LatLng({ lat: -34.898445, lng: -56.167383 });
    let circleStop3 = new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: coordStop3,
      radius: 20
    });
    let isInRadiusCircleStop3 = window.google.maps.geometry.spherical.computeDistanceBetween(currentPosition, circleStop3.getCenter()) <= circleStop3.getRadius();
    return isInRadiusCircleStop3;
  }

  areaCircleStop4 = () => {
    const google = window.google;
    let coordStop4 = new google.maps.LatLng({ lat: -34.9002359, lng: -56.1717010 });
    let circleStop4 = new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: coordStop4,
      radius: 20
    });
    let isInRadiusCircleStop4 = window.google.maps.geometry.spherical.computeDistanceBetween(currentPosition, circleStop4.getCenter()) <= circleStop4.getRadius();
    return isInRadiusCircleStop4;
  }

  areaCircleStop5 = () => {
    const google = window.google;
    let coordStop5 = new google.maps.LatLng({ lat: -34.900784, lng: -56.173346 });
    let circleStop5 = new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: coordStop5,
      radius: 20
    });
    let isInRadiusCircleStop5 = window.google.maps.geometry.spherical.computeDistanceBetween(currentPosition, circleStop5.getCenter()) <= circleStop5.getRadius();
    return isInRadiusCircleStop5;
  }

  areaCircleStop6 = () => {
    const google = window.google;
    let coordStop6 = new google.maps.LatLng({ lat: -34.901822, lng: -56.175929 });
    let circleStop6 = new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: coordStop6,
      radius: 20
    });
    let isInRadiusCircleStop6 = window.google.maps.geometry.spherical.computeDistanceBetween(currentPosition, circleStop6.getCenter()) <= circleStop6.getRadius();
    return isInRadiusCircleStop6;
  }

  areaCircleStop7 = () => {
    const google = window.google;
    let coordStop7 = new google.maps.LatLng({ lat: -34.903433, lng: -56.180032 });
    let circleStop7 = new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: coordStop7,
      radius: 20
    });
    let isInRadiusCircleStop7 = window.google.maps.geometry.spherical.computeDistanceBetween(currentPosition, circleStop7.getCenter()) <= circleStop7.getRadius();
    return isInRadiusCircleStop7;
  }

  areaCircleStop8 = () => {
    const google = window.google;
    let coordStop8 = new google.maps.LatLng({ lat: -34.904226, lng: -56.182117 });
    let circleStop8 = new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: coordStop8,
      radius: 20
    });
    let isInRadiusCircleStop8 = window.google.maps.geometry.spherical.computeDistanceBetween(currentPosition, circleStop8.getCenter()) <= circleStop8.getRadius();
    return isInRadiusCircleStop8;
  }

  areaCircleStop9 = () => {
    const google = window.google;
    let coordStop9 = new google.maps.LatLng({ lat: -34.905523, lng: -56.186499 });
    let circleStop9 = new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: coordStop9,
      radius: 20
    });
    let isInRadiusCircleStop9 = window.google.maps.geometry.spherical.computeDistanceBetween(currentPosition, circleStop9.getCenter()) <= circleStop9.getRadius();
    return isInRadiusCircleStop9;
  }

  areaCircleStop10 = () => {
    const google = window.google;
    let coordStop10 = new google.maps.LatLng({ lat: -34.905805, lng: -56.191531 });
    let circleStop10 = new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: coordStop10,
      radius: 20
    });
    let isInRadiusCircleStop10 = window.google.maps.geometry.spherical.computeDistanceBetween(currentPosition, circleStop10.getCenter()) <= circleStop10.getRadius();
    return isInRadiusCircleStop10;
  }

  areaCircleStop11 = () => {
    const google = window.google;
    let coordStop11 = new google.maps.LatLng({ lat: -34.906290, lng: -56.196823 });
    let circleStop11 = new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: coordStop11,
      radius: 20
    });
    let isInRadiusCircleStop11 = window.google.maps.geometry.spherical.computeDistanceBetween(currentPosition, circleStop11.getCenter()) <= circleStop11.getRadius();
    return isInRadiusCircleStop11;
  }

  areaCircleStop12 = () => {
    const google = window.google;
    let coordStop12 = new google.maps.LatLng({ lat: -34.905123, lng: -56.199971 });
    let circleStop12 = new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: coordStop12,
      radius: 20
    });
    let isInRadiusCircleStop12 = window.google.maps.geometry.spherical.computeDistanceBetween(currentPosition, circleStop12.getCenter()) <= circleStop12.getRadius();
    return isInRadiusCircleStop12;
  }

  areaPolyCentral = () => {
    const google = window.google;
    let coordsPolyCentral = [
      new google.maps.LatLng(-34.89728, -56.16508),
      new google.maps.LatLng(-34.90503, -56.1849),
      new google.maps.LatLng(-34.90569, -56.19327),
      new google.maps.LatLng(-34.90598, -56.19726),
      new google.maps.LatLng(-34.90576, -56.19899),
      new google.maps.LatLng(-34.90475, -56.19992),
      new google.maps.LatLng(-34.90495, -56.20037),
      new google.maps.LatLng(-34.90638, -56.19994),
      new google.maps.LatLng(-34.90664, -56.19865),
      new google.maps.LatLng(-34.90658, -56.19708),
      new google.maps.LatLng(-34.9058, -56.18495),
      new google.maps.LatLng(-34.8976, -56.16412),
      new google.maps.LatLng(-34.89303, -56.16475),
      new google.maps.LatLng(-34.8931, -56.16556)
    ];

    let polyCentral = new window.google.maps.Polygon({
      paths: coordsPolyCentral,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    polyCentral.setMap(map);

    let isInPolyCentral = google.maps.geometry.poly.containsLocation(currentPosition, polyCentral);
    return isInPolyCentral;
  }

  areaPolyFacultad = () => {
    const google = window.google;
    let coordsPolyFacultad = [
      new google.maps.LatLng(-34.90179, -56.17588),
      new google.maps.LatLng(-34.90193, -56.17575),
      new google.maps.LatLng(-34.90253, -56.17728),
      new google.maps.LatLng(-34.9024, -56.17738)
    ];
    let polyFacultad = new window.google.maps.Polygon({
      paths: coordsPolyFacultad,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    polyFacultad.setMap(map);
    let isInPolyFacultad = google.maps.geometry.poly.containsLocation(currentPosition, polyFacultad);
    return isInPolyFacultad;
  }

  areaPolyIntendencia = () => {
    const google = window.google;
    let coordsPolyIntendencia = [
      new google.maps.LatLng(-34.90568, -56.18686),
      new google.maps.LatLng(-34.9055, -56.18688),
      new google.maps.LatLng(-34.90539, -56.1857),
      new google.maps.LatLng(-34.90523, -56.18486),
      new google.maps.LatLng(-34.90543, -56.18469),
      new google.maps.LatLng(-34.90559, -56.18518)
    ];

    let polyIntendencia = new window.google.maps.Polygon({
      paths: coordsPolyIntendencia,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    polyIntendencia.setMap(map);
    let isInPolyIntendencia = google.maps.geometry.poly.containsLocation(currentPosition, polyIntendencia);
    return isInPolyIntendencia;
  }

  areaPolyCagancha = () => {
    const google = window.google;
    let coordsPolyCagancha = [
      new google.maps.LatLng(-34.90572, -56.19206),
      new google.maps.LatLng(-34.90615, -56.19203),
      new google.maps.LatLng(-34.90578, -56.1869),
      new google.maps.LatLng(-34.9054, -56.18694)
    ];

    let polyCagancha = new window.google.maps.Polygon({
      paths: coordsPolyCagancha,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    polyCagancha.setMap(map);
    let isInPolyCagancha = google.maps.geometry.poly.containsLocation(currentPosition, polyCagancha);
    return isInPolyCagancha;
  }

  areaPolyIndependencia = () => {
    const google = window.google;
    let coordsPolyIndependencia = [
      new google.maps.LatLng(-34.90592, -56.19993),
      new google.maps.LatLng(-34.90615, -56.19991),
      new google.maps.LatLng(-34.90613, -56.19911),
      new google.maps.LatLng(-34.90623, -56.19892),
      new google.maps.LatLng(-34.90656, -56.19886),
      new google.maps.LatLng(-34.90652, -56.19816),
      new google.maps.LatLng(-34.90632, -56.19818),
      new google.maps.LatLng(-34.90633, -56.19861),
      new google.maps.LatLng(-34.90606, -56.19866),
      new google.maps.LatLng(-34.9059, -56.19884)
    ];

    let polyIndependencia = new window.google.maps.Polygon({
      paths: coordsPolyIndependencia,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    polyIndependencia.setMap(map);
    let isInPolyIndependencia = google.maps.geometry.poly.containsLocation(currentPosition, polyIndependencia);
    return isInPolyIndependencia;
  }

  areaPolyDetour = () => {
    const google = window.google;
    let coordsPolyDetour = [
      new google.maps.LatLng(-34.89926, -56.16978),
      new google.maps.LatLng(-34.89935, -56.17005),
      new google.maps.LatLng(-34.89874, -56.17043),
      new google.maps.LatLng(-34.90013, -56.17403),
      new google.maps.LatLng(-34.90063, -56.17372),
      new google.maps.LatLng(-34.90071, -56.17397),
      new google.maps.LatLng(-34.89992, -56.17451),
      new google.maps.LatLng(-34.89833, -56.17031)
    ];
    let polyDetour = new window.google.maps.Polygon({
      paths: coordsPolyDetour,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    polyDetour.setMap(map);
    let isInPolyDetour = google.maps.geometry.poly.containsLocation(currentPosition, polyDetour);
    return isInPolyDetour;
  }

  calculateRoute = (map) => {
    const google = window.google;

    let inicio = new google.maps.LatLng(-34.893474, -56.165168);

    let fin = new google.maps.LatLng(-34.905123, -56.199971);

    let servicioDireccion = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    let wps = [];
    waypts.forEach(wp => {
      let point = new google.maps.LatLng(wp.lat, wp.lng);
      wps.push({
        location: point,
        stopover: true
      });
    });

    let peticion = {
      origin: inicio,
      destination: fin,
      waypoints: wps,
      optimizeWaypoints: true,
      travelMode: 'DRIVING',
    };

    servicioDireccion.route(peticion, function (response, status) {
      directionsRenderer.setDirections(response);
    });
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStateTravel: (state) => {
      dispatch(stateTravel(state));
    }
  };
};

export default connect(null, mapDispatchToProps)(MapContainer);