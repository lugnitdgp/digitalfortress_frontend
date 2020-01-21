import React, { Component } from "react"
// import "../bootstrap.css"
import { Map, GoogleApiWrapper } from "google-maps-react"

const mapStyles = {
  width: "100%",
  height: "500px",
}

class GameMap extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCJO87A9heNXZUThrJudaxiu0X4mqy3cvw",
})(GameMap)
