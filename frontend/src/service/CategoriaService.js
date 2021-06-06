import axios  from 'axios';

const API_URL = 'http://localhost:8080'

class CategoriaService {
  retriveAllCategorais() {
    return axios.get(`${API_URL}/categorias`)
  }

}
export default new CategoriaService();
