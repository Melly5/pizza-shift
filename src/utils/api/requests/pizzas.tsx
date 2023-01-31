import axios from 'axios';

export const PizzaService = {
  async getAll() {
    return axios.get('/pizza');
  }
};
