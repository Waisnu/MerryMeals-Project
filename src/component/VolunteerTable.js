import React, { Component } from 'react'
import volunteerService from '../service/VolunteerService'
import { withRouter } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";


export class VolunteerTable extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      volunteers: [],
      showUpdateModal: false, // Add this line to initialize the state variable
      selectedVolunteer: null,
   };
 }


 componentDidMount(){
   volunteerService.viewVolunteer()
   .then( (response) => {
        this.setState({
            volunteers: response.data
         })
   })
 }

 deleteVolunteer(volunteerId){
  volunteerService.deleteVolunteer(volunteerId)
  .then( response =>{
    this.setState({
      volunteers: this.state.volunteers.filter(volunteer=>volunteer.volunteerId !== volunteerId)
    })
    this.props.history.push(`/volunteers`)
  })
 }
 
 getVolunteerById(volunteerId){
  this.props.history.push(`/volunteer/${volunteerId}`)
  window.location.reload();
 }

 openUpdateModal(volunteerId) {
  const selectedVolunteer = this.state.volunteers.find(
    (volunteer) => volunteer.volunteerId === volunteerId
  );
  this.setState({
    showUpdateModal: true,
    selectedVolunteer: selectedVolunteer,
  });
}

closeUpdateModal() {
  this.setState({
    showUpdateModal: false,
    selectedVolunteer: null,
  });
}

updateVolunteer(volunteerId, updatedVolunteer) {
  volunteerService
    .updateVolunteer(volunteerId, updatedVolunteer)
    .then((response) => {
      toast.info(response.data);
      this.closeUpdateModal();

      const updatedVolunteers = this.state.volunteers.map((volunteer) => {
        if (volunteer.volunteerId === volunteerId) {
          return { ...volunteer, ...updatedVolunteer };
        }
        return volunteer;
      });

      this.setState({ volunteers: updatedVolunteers });
    })
    .catch((error) => {
      toast.error(error.data);
    });
}

render() {
  const { showUpdateModal, selectedVolunteer } = this.state; // Destructure state variables
  return (
    
    <div>
          <h1 className='mb-4'>VIEW VOLUNTEERS</h1>
          <table class="table">
          <thead>
              <tr class="table-success">
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Station</th>
              <th scope='col'>Actions</th>
              </tr>
          </thead>
          <tbody>
          {
              this.state.volunteers.map(volunteer =>
                  <tr key={volunteer.volunteerId}>
                      <td>{volunteer.firstName}</td>
                      <td>{volunteer.contactNumber}</td>
                      <td>{volunteer.station}</td>
                      <td>
                        <button type="button" class="btn btn-success"
                        onClick={ () => this.getVolunteerById(volunteer.volunteerId)}>VIEW</button> &nbsp;

                        <button type="button" class="btn btn-warning"
                        onClick={ () => this.openUpdateModal(volunteer.volunteerId)}>UPDATE</button> &nbsp;


                        <button type="button" class="btn btn-danger"
                        onClick={ () => this.deleteVolunteer(volunteer.volunteerId)}>DELETE</button> &nbsp;
                      </td>
                  </tr>
              )
          }
          </tbody>
          </table>
      {showUpdateModal && selectedVolunteer && (
        <Modal show={showUpdateModal} onHide={() => this.closeUpdateModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Update Volunteer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
        <div className="form-group">
          <label htmlFor="firstname">First Name </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            value={selectedVolunteer.firstName}
            onChange={(e) => {
              const updatedVolunteer = {
                ...selectedVolunteer,
                firstName: e.target.value,
              };
              this.setState({ selectedVolunteer: updatedVolunteer });
            }}
          />
        </div>
          <div className="form-group">
          <label htmlFor="lastname">Last Name </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            value={selectedVolunteer.lastName}
            onChange={(e) => {
              const updatedVolunteer = {
                ...selectedVolunteer,
                lastName: e.target.value,
              };
              this.setState({ selectedVolunteer: updatedVolunteer });
            }}
            />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  value={selectedVolunteer.lastName}
                  onChange={(e) => {
                    const updatedVolunteer = {
                      ...selectedVolunteer,
                      lastName: e.target.value,
                    };
                    this.setState({ selectedVolunteer: updatedVolunteer });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={selectedVolunteer.user.email}
                  onChange={(e) => {
                    const updatedVolunteer = {
                      ...selectedVolunteer,
                      user: {
                        ...selectedVolunteer.user,
                        email: e.target.value,
                      },
                    };
                    this.setState({ selectedVolunteer: updatedVolunteer });
                  }}
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={selectedMember.password}
                  onChange={(e) => {
                    const updatedMember = {
                      ...selectedMember,
                      password: e.target.value,
                    };
                    this.setState({ selectedMember: updatedMember });
                  }}
                />
              </div> */}
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="contactNumber"
                  value={selectedVolunteer.contactNumber}
                  onChange={(e) => {
                    const updatedVolunteer = {
                      ...selectedVolunteer,
                      contactNumber: e.target.value,
                    };
                    this.setState({ selectedVolunteer: updatedVolunteer });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="text"
                  className="form-control"
                  id="dob"
                  value={selectedVolunteer.dob}
                  onChange={(e) => {
                    const updatedVolunteer = {
                      ...selectedVolunteer,
                      dob: e.target.value,
                    };
                    this.setState({ selectedVolunteer: updatedVolunteer });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="groupName">Group Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="groupName"
                  value={selectedVolunteer.groupName}
                  onChange={(e) => {
                    const updatedVolunteer = {
                      ...selectedVolunteer,
                      groupName: e.target.value,
                    };
                    this.setState({ selectedVolunteer: updatedVolunteer });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="station">Station</label>
                <input
                  type="text"
                  className="form-control"
                  id="station"
                  value={selectedVolunteer.station}
                  onChange={(e) => {
                    const updatedVolunteer = {
                      ...selectedVolunteer,
                      station: e.target.value,
                    };
                    this.setState({ selectedVolunteer: updatedVolunteer });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="isApproved">Approve Application</label>
                <select
                  className="form-control"
                  id="isApproved"
                  value={selectedVolunteer.user.isApproved}
                  onChange={(e) => {
                    const updatedVolunteer = {
                      ...selectedVolunteer,
                      user: {
                        ...selectedVolunteer.user,
                        isApproved: e.target.value === "true",
                      },
                    };
                    this.setState({ selectedVolunteer: updatedVolunteer });
                  }}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                this.updateVolunteer(selectedVolunteer.volunteerId, selectedVolunteer)
              }
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => this.closeUpdateModal()}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      )}

    </div>
  )
}


}
  
export default withRouter (VolunteerTable)