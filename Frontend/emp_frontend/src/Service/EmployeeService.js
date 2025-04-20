import axios from 'axios';


const EMP_BASE_REST_API_URL='http://localhost:8080/api/emp';

class EmployeeService{

    getAllEmployes(){
        return axios.get(EMP_BASE_REST_API_URL)
    }
}

export default new EmployeeService();