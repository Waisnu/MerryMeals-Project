import axios from 'axios'
const API_BASE_URL = "http://localhost:8080/"
class VolunteerService{
    viewVolunteer(){
        return axios.get(API_BASE_URL + "volunteer/all");
    }

    getVolunteerById(volunteerId){
        return axios.get(API_BASE_URL + "volunteer/" + volunteerId);
    }
    deleteVolunteer(volunteerId){
        return axios.delete(API_BASE_URL + "volunteer/" + volunteerId);
    }

    updateVolunteer(volunteerId, volunteer){
        return axios.put(API_BASE_URL + "volunteer/update/" + volunteerId, volunteer);
    }
}

const volunteerService = new VolunteerService()
export default volunteerService