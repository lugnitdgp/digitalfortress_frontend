import ReactMapboxGl, { Layer, Feature, MapContext, Marker } from "react-mapbox-gl";
import React from 'react';
import '../styles/mapbox-gl.css';
import '../bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
    const Map = ReactMapboxGl({
        accessToken: "pk.eyJ1Ijoicm9taXRrYXJtYWthciIsImEiOiJjandnZDB3OGwxczV4NDBtZ2l0YTJ5aGVsIn0.w0b86s6XC_CFVG726Zwjrw"
    });

    if(props.positions != null)
    var markers = props.positions.map((v) => {
        return <Marker
        coordinates={v}
        anchor="bottom">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
    </Marker>
    })

    return <div className="card">
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: "50vh",
            }}
            center={[-67.13734351262877, 45.137451890638886]}
            zoom={[8]}>
            {/* <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer> */}
            {markers}
            <MapContext.Consumer>
                {(map) => {
                    map.addLayer({
                        'id': 'maine',
                        'type': 'fill',
                        'source': {
                            'type': 'geojson',
                            'data': {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': [props.positions]
                                }
                            }
                        },
                        'layout': {},
                        'paint': {
                            'fill-color': '#088',
                            'fill-opacity': 0.8
                        }
                    });
                }}
            </MapContext.Consumer>
        </Map>
    </div>
}