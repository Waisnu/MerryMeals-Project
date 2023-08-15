import axios from 'axios'
const API_BASE_URL = "http://localhost:8080"
class UserService{
    viewUser(){
        return axios.get(API_BASE_URL + "users");
    }

    getUserById(userId){
        return axios.get(API_BASE_URL + "user/" + userId);
    }

    deleteUser(userId){
        return axios.delete(API_BASE_URL + "user/" + userId);
    }

    saveUser(user){
        return axios.post(API_BASE_URL + "user", user);
    }

    updateUser(user){
        return axios.put(API_BASE_URL + "user/" + user.userId, user);
    }

    searchUser(keyword){
        return axios.get(API_BASE_URL + "user/"+ keyword);
    }
}

const userService = new UserService()
export default userService