import React, { Component } from 'react'
import volunteerService from '../service/VolunteerService'
import { withRouter } from 'react-router-dom';

export class VolunteerTable extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      volunteers: [],
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

 updateVolunteer(volunteerId){
  this.props.history.push(`/post/${volunteerId}`)
  window.location.reload();
 }

  render() {
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
                          onClick={ () => this.updateVolunteer(volunteer.volunteerId)}>UPDATE</button> &nbsp;


                          <button type="button" class="btn btn-danger"
                          onClick={ () => this.deleteVolunteer(volunteer.volunteerId)}>DELETE</button> &nbsp;
                        </td>
                    </tr>
                )
            }
            </tbody>
            </table>
      </div>
    )
  }
}

export default withRouter (VolunteerTable)