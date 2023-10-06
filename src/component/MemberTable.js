import React, { Component } from "react";
import memberService from "../service/MemberService";
import { withRouter } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";

export class MemberTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      showUpdateModal: false,
      selectedMember: null,
    };

    this.openUpdateModal = this.openUpdateModal.bind(this);
    this.updateMember = this.updateMember.bind(this);
  }

  componentDidMount() {
    memberService
      .viewMember()
      .then((response) => {
        this.setState({
          members: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  deleteMember(memberId) {
    memberService
      .deleteMember(memberId)
      .then((response) => {
        this.setState({
          members: this.state.members.filter(
            (member) => member.memberId !== memberId
          ),
        });
        this.props.history.push("/members");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getMemberById(memberId) {
    this.props.history.push(`/member/${memberId}`);
  }

  openUpdateModal(memberId) {
    const selectedMember = this.state.members.find(
      (member) => member.memberId === memberId
    );
    this.setState({
      showUpdateModal: true,
      selectedMember: selectedMember,
    });
  }

  closeUpdateModal() {
    this.setState({
      showUpdateModal: false,
      selectedMember: null,
    });
  }

  updateMember(memberId, updatedMember) {
    memberService
      .updateMember(memberId, updatedMember)
      .then((response) => {
        toast.info(response.data);
        this.closeUpdateModal();

        const updatedMembers = this.state.members.map((member) => {
          if (member.memberId === memberId) {
            return { ...member, ...updatedMember };
          }
          return member;
        });

        this.setState({ members: updatedMembers });
      })
      .catch((error) => {
        toast.error(error.data);
      });
  }

  render() {
    const { members, showUpdateModal, selectedMember } = this.state;

    return (
      <div>
        <h1 className="mb-4">Member List</h1>
        <table className="table">
          <thead>
            <tr className="table-success">
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Condition</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.memberId}>
                <td>{member.firstName}</td>
                <td>{member.contactNumber}</td>
                <td>{member.condition}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning me-2"
                    onClick={() => this.openUpdateModal(member.memberId)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.deleteMember(member.memberId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showUpdateModal && selectedMember && (
          <Modal show={showUpdateModal} onHide={() => this.closeUpdateModal()}>
            <Modal.Header closeButton>
              <Modal.Title>Update Member</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <label htmlFor="firstname">First Name </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    value={selectedMember.firstName}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        firstName: e.target.value,
                      };
                      this.setState({ selectedMember: updatedMember });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Last Name </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    value={selectedMember.lastName}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        lastName: e.target.value,
                      };
                      this.setState({ selectedMember: updatedMember });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={selectedMember.user.email}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        user: {
                          ...selectedMember.user,
                          email: e.target.value,
                        },
                      };
                      this.setState({ selectedMember: updatedMember });
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
                    value={selectedMember.contactNumber}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        contactNumber: e.target.value,
                      };
                      this.setState({ selectedMember: updatedMember });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="text"
                    className="form-control"
                    id="dob"
                    value={selectedMember.dob}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        dob: e.target.value,
                      };
                      this.setState({ selectedMember: updatedMember });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="condition">Condition</label>
                  <input
                    type="text"
                    className="form-control"
                    id="condition"
                    value={selectedMember.condition}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        condition: e.target.value,
                      };
                      this.setState({ selectedMember: updatedMember });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="allergies">Allergies</label>
                  <input
                    type="text"
                    className="form-control"
                    id="allergies"
                    value={selectedMember.allergies}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        allergies: e.target.value,
                      };
                      this.setState({ selectedMember: updatedMember });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="caregiverName">Caregiver's Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="caregiverName"
                    value={selectedMember.caregiverName}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        caregiverName: e.target.value,
                      };
                      this.setState({ selectedMember: updatedMember });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="relationship">Relationship</label>
                  <input
                    type="text"
                    className="form-control"
                    id="relationship"
                    value={selectedMember.relationship}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        relationship: e.target.value,
                      };
                      this.setState({ selectedMember: updatedMember });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="caregiverContact">Caregiver's Contact</label>
                  <input
                    type="number"
                    className="form-control"
                    id="caregiverContact"
                    value={selectedMember.caregiverContact}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        caregiverContact: e.target.value,
                      };
                      this.setState({ selectedMember: updatedMember });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="isApproved">Approve Application</label>
                  <select
                    className="form-control"
                    id="isApproved"
                    value={selectedMember.user.isApproved}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        user: {
                          ...selectedMember.user,
                          isApproved: e.target.value === "true",
                        },
                      };
                      this.setState({ selectedMember: updatedMember });
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
                  this.updateMember(selectedMember.memberId, selectedMember)
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
    );
  }
}

export default withRouter(MemberTable);
