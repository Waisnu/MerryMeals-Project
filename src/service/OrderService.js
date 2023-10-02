import axios from 'axios'
const API_BASE_URL = "http://localhost:8080/"

class OrderService{
    saveOrder(orderData){
        return axios.post(API_BASE_URL + "order/save/", orderData)
    }

    getOrder(memberId){
        return axios.get(API_BASE_URL + "order/member/" + memberId)
    }

    viewMealOrders() {
        return axios.get(API_BASE_URL + "order/all");
    }

    deleteOrder(mealOrderId){
        return axios.delete(API_BASE_URL + "order/" + mealOrderId)
    }
}

const orderService = new OrderService()
export default orderService

