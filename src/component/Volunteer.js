import React, { Component } from 'react';
import volunteerService from '../service/VolunteerService';
import { toast } from 'react-toastify';

export class Volunteer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      volunteerId: this.props.match.params.volunteerId,
      volunteer: {},
      address: '',
    };
  }

  componentDidMount() {
    volunteerService.getVolunteerById(this.state.volunteerId)
      .then((response) => {
        this.setState({
          volunteer: response.data,
        });
        
        const { latitude, longitude } = response.data;
        this.reverseGeocodeAddress(latitude, longitude);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }

  reverseGeocodeAddress = (latitude, longitude) => {
    var geocoder = new window.google.maps.Geocoder();
    var lat = parseFloat(latitude);
    var long = parseFloat(longitude);

    if (isNaN(lat) || isNaN(long)) {
      toast.error('Please enter valid coordinates.');
      return;
    }

    var location = new window.google.maps.LatLng(lat, long);

    geocoder.geocode({ location: location }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          var formattedAddress = results[0].formatted_address;
          var modifiedAddress = formattedAddress.replace(/\s\w+\+\w+/g, '');
          this.setState({ address: modifiedAddress });
        } else {
          toast.error('No results found.');
        }
      } else {
        toast.error('Please enter a valid address!');
      }
    });
  };

  render() {
    const { volunteer, address } = this.state;

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='mb-5' style={{ width: '50%' }}>
          <h1 className="my-4">VIEW VOLUNTEER'S INFORMATION</h1>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">First Name</th>
                <td style={{ textAlign: 'left' }}>{volunteer.firstName}</td>
              </tr>
              <tr>
                <th scope="row">Last Name</th>
                <td style={{ textAlign: 'left' }}>{volunteer.lastName}</td>
              </tr>
              <tr>
                <th scope="row">Address</th>
                <td style={{ textAlign: 'left' }}>{address}</td>
              </tr>
              <tr>
                <th scope="row">Contact Number</th>
                <td style={{ textAlign: 'left' }}>{volunteer.contactNumber}</td>
              </tr>
              <tr>
                <th scope="row">Date of Birth</th>
                <td style={{ textAlign: 'left' }}>{volunteer.dob}</td>
              </tr>
              <tr>
                <th scope="row">Representing Group</th>
                <td style={{ textAlign: 'left' }}>{volunteer.representingGroup}</td>
              </tr>
              <tr>
                <th scope="row">Group Name</th>
                <td style={{ textAlign: 'left' }}>{volunteer.groupName}</td>
              </tr>
              <tr>
                <th scope="row">Station</th>
                <td style={{ textAlign: 'left' }}>{volunteer.station}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Volunteer;