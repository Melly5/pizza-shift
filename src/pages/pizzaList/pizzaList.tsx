import { useQuery } from 'react-query';
import { Categories } from '../../components/pizzaCategories/categories';
import { Skeleton } from '../../components/pizzaItem/skeleton';
import { Header } from '../../components/header/header';
import { PizzaService } from '../../utils/api/requests';
import { PizzaItem } from '../../components/pizzaItem/pizzaItem';
import { Footer } from '../../components/footer/footer';
import './pizzaList.scss';

export const PizzaList = () => {
  const { data, isLoading, error } = useQuery('pizzas', () => PizzaService.getAll());

  console.log(data);

  return (
    <div>
      <Header />
      <div className='main-pizza'>
        <p>Выбрать пиццу</p>
        <Categories />
        <div className='pizzas'>
          {data?.data.map((pizza: any, idx: Number) =>
            isLoading ? <Skeleton /> : <PizzaItem key={idx} pizza={pizza} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
