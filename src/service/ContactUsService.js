import axios from 'axios'


class ContactUsService{

    slackMessage(text){
        return axios.post("http://localhost:8080/webhook/message/dea-group10-merrymeal-project-summative", text)
    }

}

export default new ContactUsService;