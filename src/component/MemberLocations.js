import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px'
};

class MemberLocations extends Component {
  render() {
    const { locations } = this.props;
    return (
      <div>
        <h2>Member Location</h2>
        <div>
          <label htmlFor="searchBy">Search By:</label>
          <select id="searchBy">
            <option value="name">Name</option>
            <option value="address">Address</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {locations.map(location => (
              <tr key={location.id}>
                <td>{location.id}</td>
                <td>{location.name}</td>
                <td>{location.address}</td>
                <td>
                  <button>Get Direction</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h2>Map</h2>
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{ lat: 37.7749, lng: -122.4194 }}
          >
            {locations.map(location => (
              <Marker
                key={location.id}
                position={{ lat: location.lat, lng: location.lng }}
              />
            ))}
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY'
})(MemberLocations);