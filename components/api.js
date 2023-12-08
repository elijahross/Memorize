import axios from "axios";


const api = axios.create({
    baseURL: 'https://fze32gkxpa.execute-api.eu-north-1.amazonaws.com/prod',
    timeout: 3000
  });
  

  export default api