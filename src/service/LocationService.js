import axios from 'axios'
export const API_BASE_URL = "http://localhost:8080";
class LocationService{
    getServiceCenter(){
        return axios.get(API_BASE_URL + "/servicecenter/all");
    }

    reverseGeocode(latitude, longitude){
        return 
    }
}

const locationService = new LocationService()
export default locationService;


