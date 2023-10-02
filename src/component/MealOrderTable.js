import React, { Component } from 'react'
import orderService from '../service/OrderService'
import memberService from '../service/MemberService'
import { withRouter } from 'react-router-dom';


export class MealOrderTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mealOrders: [],
      members: [],
    };
  }

  componentDidMount() {
    Promise.all([orderService.viewMealOrders(), memberService.viewMember()])
      .then(([mealOrdersResponse, membersResponse]) => {
        this.setState({
          mealOrders: mealOrdersResponse.data,
          members: membersResponse.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

  }

  getOrder(mealOrderId){
    this.props.history.push(`order/member/${mealOrderId}`)
    window.location.reload();
   }

   deleteMealOrder(mealOrderId){
    orderService.deleteOrder(mealOrderId)
    .then( response =>{
    this.setState({
      mealOrders: this.state.mealOrders.filter(mealOrder => mealOrder.mealOrderId !== mealOrderId)
    })
    this.props.history.push("/mealOrders");
  })
  }

  render() {
    return (
      <div>
        <h1 className="mb-4">VIEW MEAL ORDERS</h1>
        <table className="table">
          <thead>
            <tr className="table-success">
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Orders</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
          {this.state.mealOrders.map((mealOrder) => (
              <tr key={mealOrder.mealOrderId}>
                <td>{mealOrder.member.firstName}</td>
                <td>{mealOrder.member.lastName}</td>
                <td>
                  <ul>
                    <li>Monday: {mealOrder.mondayMeal}</li>
                    <li>Tuesday: {mealOrder.tuesdayMeal}</li>
                    <li>Wednesday: {mealOrder.wednesdayMeal}</li>
                    <li>Thursday: {mealOrder.thursdayMeal}</li>
                    <li>Friday: {mealOrder.fridayMeal}</li>
                  </ul>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => this.getMealOrderById(mealOrder.mealOrderId)}
                  >
                    VIEW
                  </button>{' '}
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.deleteMealOrder(mealOrder.mealOrderId)}
                  >
                    DELETE
                  </button>{' '}
                  &nbsp;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(MealOrderTable);