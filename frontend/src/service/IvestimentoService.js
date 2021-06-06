import axios  from 'axios';

const API_URL = 'http://localhost:8080'

class InvestimentoService {
  retriveAllInvestimentos(){
    return axios.get(`${API_URL}/investimentos`);
  }
  saveInvestimento(investimento){
    return axios.post(`${API_URL}/investimentos`, investimento);
  }
  deleteInvestimento(codigo){
    return axios.delete(`${API_URL}/investimentos/${codigo}`);
  }
}

export default new InvestimentoService();
