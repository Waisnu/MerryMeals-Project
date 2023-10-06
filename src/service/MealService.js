import axios from 'axios'
const API_BASE_URL = "http://localhost:8080/"
class MealService{
    getMealItems() {
        return axios.get(API_BASE_URL + "meal/all");
    }
    updateMeal(mealItemId, meal){
        return axios.put(API_BASE_URL + "meal/" + mealItemId, meal);
    }
    deleteMeal(mealItemId){
        return axios.delete(API_BASE_URL + "meal/" + mealItemId);
    }

    createMeal(newMeal){
        return axios.post(API_BASE_URL + "meal/savemeal", newMeal);
    }
}

const mealService = new MealService()

export default mealService
