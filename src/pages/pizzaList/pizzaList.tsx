import { useQuery } from 'react-query';
import { Categories } from '../../components/pizzaCategories/categories';
import { Skeleton } from '../../components/pizzaItem/skeleton';
import { Header } from '../../components/header/header';
import { PizzaService } from '../../utils/api/requests';
import { PizzaItem } from '../../components/pizzaItem/pizzaItem';
import { Footer } from '../../components/footer/footer';
import './pizzaList.scss';
import { useState } from 'react';

export const PizzaList = () => {
  const { data, isLoading, error } = useQuery('pizzas', () => PizzaService.getAll());
  const [categoryId, setCategoryId] = useState<Number>(0);
  console.log(data);
  //"classifications":{"new":true,"spicy":false,"vegetarian":false}},
  return (
    <div>
      <Header />
      <div className='main-pizza'>
        <p>Выбрать пиццу</p>
        <Categories value={categoryId} onClickCategory={(id: Number) => setCategoryId(id)} />
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
