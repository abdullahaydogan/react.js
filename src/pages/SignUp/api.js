import axios from "axios";

export function signUpApi(body){
    axios.post('/api/v1/users',body,{
        headers:{
            "Accept-Language":"en"
        }
    });
}