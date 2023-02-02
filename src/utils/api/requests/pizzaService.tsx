import { api } from '../instance';

export const PizzaService = {
  async getAll() {
    return api.get('/pizza');
  }
};
