import React from "react"
import {
  Map,
  Marker,
  Polygon,
  GoogleApiWrapper
} from "google-maps-react"

const mapStyles = {
  padding: "15px",
  width: "95%",
  height: "425px",
}

class GameMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      polygons: [],
    }
  }

  componentDidMount() {}

  render() {
    var self = this
    var bounds = new this.props.google.maps.LatLngBounds()
    for (var i = 0; i < this.props.positions.length; i++) {
      bounds.extend({
        lat: this.props.positions[i][0],
        lng: this.props.positions[i][1],
      })
    }
    return (
        <Map
          google={this.props.google}
          zoom={1}
          style={mapStyles}
          center={{
            lat: self.props.centerLoc[0],
            lng: self.props.centerLoc[1],
          }}
          bounds={bounds}
        >
          {this.props.positions.map(v => (
            <Marker
              title={`${v[0] + v[1]}`}
              name={`${v[0] + v[1]}`}
              key={v[0] + v[1]}
              position={{ lat: v[0], lng: v[1] }}
            />
          ))}
          <Polygon
            paths={this.props.positions.map(v => ({ lat: v[0], lng: v[1] }))}
            key={1}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35}
          />
        </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAP_API_KEY,
})(GameMap)
