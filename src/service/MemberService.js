import axios from 'axios'
const API_BASE_URL = "http://localhost:8080/"
class MemberService{
    viewMember(){
        return axios.get(API_BASE_URL + "member/all");
    }

    getMemberById(memberId){
        return axios.get(API_BASE_URL + "member/" + memberId);
    }

    deleteMember(memberId){
        return axios.delete(API_BASE_URL + "member/" + memberId);
    }

    updateMember(memberId, member){
        return axios.put(API_BASE_URL + "member/update/" + memberId, member);
    }

    searchMember(keyword){
        return axios.get(API_BASE_URL + "members/"+ keyword);
    }
    
}

const memberService = new MemberService()
export default memberService