import axios from "axios";

export function loginApi(body){
    axios.post("/api/v1/logIn",body);
}