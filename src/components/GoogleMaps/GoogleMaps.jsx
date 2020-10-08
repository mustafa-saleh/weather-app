import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import React, { Component } from "react";
import { isEmpty } from "../../utils/basic";

export class MapContainer extends Component {
  mapClicked = (mapProps, map, clickEvent) => {
    const latLng = {
      lat: clickEvent.latLng.lat(),
      lng: clickEvent.latLng.lng(),
    };
    this.props.setMarker(latLng);
  };

  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    } else {
      return (
        <div
          style={{
            position: "relative",
            height: "calc(60vh)",
          }}
        >
          <Map
            zoom={2}
            onClick={this.mapClicked}
            google={this.props.google}
            initialCenter={{ lat: 15.5007, lng: 32.5599 }}
          >
            {isEmpty(this.props.marker) ? null : (
              <Marker
                draggable
                position={this.props.marker}
                icon={{
                  url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                }}
              />
            )}
          </Map>
        </div>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD3s785xPg5XvFY5XOBUy6JiyOIcZOsyFQ",
})(MapContainer);
