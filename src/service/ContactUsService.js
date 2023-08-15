import axios from 'axios'


class ContactUsService{

    slackMessage(text){
        return axios.post("http://localhost:8080/webhook/message/MDSE-1222-DEA-Group-A", text)
    }

}

export default new ContactUsService