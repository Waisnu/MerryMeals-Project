import React, { Component } from 'react';
import memberService from '../service/MemberService';
import { toast } from 'react-toastify';

export class Member extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memberId: this.props.match.params.memberId,
      member: {},
      address: '',
    };
  }

  componentDidMount() {
    memberService.getMemberById(this.state.memberId)
      .then((response) => {
        this.setState({
          member: response.data,
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
    const { member, address } = this.state;

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='mb-5' style={{ width: '50%' }}>
          <h1 className="my-4">VIEW MEMBER'S INFORMATION</h1>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">First Name</th>
                <td style={{ textAlign: 'left' }}>{member.firstName}</td>
              </tr>
              <tr>
                <th scope="row">Last Name</th>
                <td style={{ textAlign: 'left' }}>{member.lastName}</td>
              </tr>
              <tr>
                <th scope="row">Address</th>
                <td style={{ textAlign: 'left' }}>{address}</td>
              </tr>
              <tr>
                <th scope="row">Contact Number</th>
                <td style={{ textAlign: 'left' }}>{member.contactNumber}</td>
              </tr>
              <tr>
                <th scope="row">Date of Birth</th>
                <td style={{ textAlign: 'left' }}>{member.dob}</td>
              </tr>
              <tr>
                <th scope="row">Condition</th>
                <td style={{ textAlign: 'left' }}>{member.condition}</td>
              </tr>
              <tr>
                <th scope="row">Allergies</th>
                <td style={{ textAlign: 'left' }}>{member.allergies}</td>
              </tr>
              <tr>
                <th scope="row">Caregiver Name</th>
                <td style={{ textAlign: 'left' }}>{member.caregiverName}</td>
              </tr>
              <tr>
                <th scope="row">Relationship</th>
                <td style={{ textAlign: 'left' }}>{member.relationship}</td>
              </tr>
              <tr>
                <th scope="row">Caregiver Contact</th>
                <td style={{ textAlign: 'left' }}>{member.caregiverContact}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Member;