import React, { Component } from 'react'
import mealService from '../service/MealService'
import { withRouter } from 'react-router-dom';
import { toast } from "react-toastify";
import { Modal} from "react-bootstrap";


export class MealTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: [],
      showUpdateModal: false,
      selectedMeal: null,
      showAddModal: false,
      newMeal: {
        day: "",
        description: '',
        name: '',
      },
    };
    this.openUpdateModal = this.openUpdateModal.bind(this);
    this.updateMeal = this.updateMeal.bind(this);
    this.createMeal = this.createMeal.bind(this);
    this.openAddModal = this.openAddModal.bind(this);
    this.closeAddModal = this.closeAddModal.bind(this);
  }

  componentDidMount() {
    mealService.getMealItems()
      .then((response) => {
        this.setState({
          meals: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  deleteMeal(mealItemId) {
    mealService.deleteMeal(mealItemId)
      .then(response => {
        this.setState({
          meals: this.state.meals.filter(meal => meal.mealItemId !== mealItemId)
        });
        this.props.history.push(`/meals`);
      });
  }

  getMealById(mealItemId) {
    this.props.history.push(`/meal/${mealItemId}`);
  }

  openUpdateModal(mealItemId) {
    const selectedMeal = this.state.meals.find(meal => meal.mealItemId === mealItemId);
    this.setState({
      showUpdateModal: true,
      selectedMeal: selectedMeal,
    });
  }

  closeUpdateModal() {
    this.setState({
      showUpdateModal: false,
      selectedMeal: null,
    });
  }

  updateMeal(mealItemId, updatedMeal) {
    mealService.updateMeal(mealItemId, updatedMeal)
      .then((response) => {
        toast.info('Menu updated successfully!');
        this.closeUpdateModal();

        const updatedMeals = this.state.meals.map(meal => {
          if (meal.mealItemId === mealItemId) {
            return { ...meal, ...updatedMeal };
          }
          return meal;
        });

        this.setState({ meals: updatedMeals });
      })
      .catch((error) => {
        toast.error('Failed to update the menu.');
      });
  }

  createMeal = (newMeal) => {
    mealService.createMeal(newMeal)
      .then((response) => {
        toast.success('Meal created successfully!');
        const createdMeal = response.data;
  
        this.setState(prevState => ({
          meals: [...prevState.meals, createdMeal]
        }));
        this.closeAddModal();
      })
      .catch((error) => {
        toast.error('Failed to create the meal.');
      });
  }

    openAddModal() {
      this.setState({ showAddModal: true });
    }

    closeAddModal() {
      this.setState({
        showAddModal: false,
        newMeal: {
          day: "",
          description: '',
          name: '',
        },
      });
    }

  render() {
    const { meals, showUpdateModal, selectedMeal, showAddModal, newMeal } = this.state;

    // Group meals by day
    const groupedMeals = meals.reduce((acc, meal) => {
      if (!acc[meal.day]) {
        acc[meal.day] = [];
      }
      acc[meal.day].push(meal);
      return acc;
    }, {});

    const daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    return (
      <div>
        <h1 className="mb-4">Meal Menu</h1>
        <table className="table">
          <thead>
            <tr className="table-success">
              <th scope="col" style={{ width: '20%' }}>Day</th>
              <th scope="col" style={{ width: '20%' }}>Menu</th>
              <th scope="col" style={{ width: '25%' }}>Type</th>
              <th scope="col" style={{ width: '20%' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
          {daysOrder.map(day => {
            const mealsForDay = groupedMeals[day] || [];
            return (
              <tr key={day}>
                <td>{day}</td>
                <td colSpan="3">
                  <table className="table">
                    <tbody>
                    {mealsForDay.map(meal => (
                        <tr key={meal.mealItemId}>
                          <td style={{ width: '30%' }}>{meal.name}</td>
                          <td style={{ width: '40%' }}>{meal.description}</td>
                          <td style={{ width: '30%' }}>
                            <button
                              type="button"
                              className="btn btn-warning"
                              onClick={() => this.openUpdateModal(meal.mealItemId)}
                            >
                              UPDATE
                            </button>
                            &nbsp;
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => this.deleteMeal(meal.mealItemId)}
                            >
                              DELETE
                            </button>
                            &nbsp;
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
              );
            })}
          </tbody>
        </table>

      {showUpdateModal && selectedMeal && (
          <Modal show={showUpdateModal} onHide={() => this.closeUpdateModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Update Meal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
  <div className="form-group">
    <label class="mb-2" htmlFor="name">Name</label>
    <input
      type="text"
      className="form-control"
      id="name"
      value={selectedMeal.name}
      onChange={(e) => {
        const updatedMeal = { ...selectedMeal, name: e.target.value };
        this.setState({ selectedMeal: updatedMeal });
      }}
    />
  </div>
  <div className="form-group">
    <label class="mb-2 mt-2" htmlFor="description">Type</label>
    <input
      type="text"
      className="form-control mb-2"
      id="description"
      value={selectedMeal.description}
      onChange={(e) => {
        const updatedMeal = { ...selectedMeal, description: e.target.value };
        this.setState({ selectedMeal: updatedMeal });
      }}
    />
  </div>
  {/* Add more input fields for other properties if necessary */}
</form>
          </Modal.Body>
          <Modal.Footer>
  <button
    type="button"
    className="btn btn-primary"
    onClick={() => this.updateMeal(selectedMeal.mealItemId, selectedMeal)}
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
        
        <Modal show={showAddModal} onHide={() => this.closeAddModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Add Meal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div className="form-group">
              <label class="mb-2" htmlFor="day">Day</label>
              <input
                type="text"
                className="form-control"
                id="day"
                value={newMeal.day}
                onChange={(e) => {
                  const createdMeal = { ...newMeal, day: e.target.value };
                  this.setState({ newMeal: createdMeal });
                }}
              />
            </div>
            <div className="form-group">
              <label class="mb-2 mt-2" htmlFor="description">Type</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={newMeal.description}
                onChange={(e) => {
                  const createdMeal = { ...newMeal, description: e.target.value };
                  this.setState({ newMeal: createdMeal });
                }}
              />
            </div>
            <div className="form-group">
              <label class="mb-2 mt-2" htmlFor="name">Dish</label>
              <input
                type="text"
                className="form-control mb-2"
                id="name"
                value={newMeal.name}
                onChange={(e) => {
                  const createdMeal = { ...newMeal, name: e.target.value };
                  this.setState({ newMeal: createdMeal });
                }}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.createMeal(newMeal)}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => this.closeAddModal()}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>

      {/* Add Meal Button */}
      <button
        type="button"
        className="btn btn-success me-1"
        onClick={() => this.openAddModal()}
      >
        Add Meal
      </button>
      </div>
    );
  }
}

export default withRouter(MealTable);
