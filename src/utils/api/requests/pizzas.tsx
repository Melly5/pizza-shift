import axios from 'axios';
import { Skeleton } from '../../../components/pizzaItem/skeleton';

export const PizzaService = {
  async getAll() {
    return axios.get('/pizza');
  }
};
