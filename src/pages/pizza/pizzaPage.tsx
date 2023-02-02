import { useQuery } from 'react-query';
import { useState } from 'react';
import { Categories } from '../../components/pizza/pizzaCategories/categories';
import { Skeleton } from '../../components/pizza/pizzaItem/pizzaItemSkeleton';
import { Header } from '../../components/header/header';
import { PizzaService } from '../../utils/api/requests';
import { PizzaItem } from '../../components/pizza/pizzaItem/pizzaItem';
import { Footer } from '../../components/footer/footer';
import './pizza.scss';

export const PizzaList = () => {
  const { data, isLoading } = useQuery('pizzas', () => PizzaService.getAll());

  const [categoryId, setCategoryId] = useState<any>(1);
  const categoryNames = ['new', 'spicy', 'vegeterian'];
  console.log(categoryNames[categoryId]);

  return (
    <div>
      <Header />
      <div className='main-pizza'>
        <p>Выбрать пиццу</p>

        <Categories
          value={categoryId}
          onClickCategory={(id: Number) => {
            setCategoryId(id);
          }}
        />
        <div className='pizzas'>
          {data?.data.map((pizza: any, idx: Number) =>
            isLoading ? (
              <Skeleton />
            ) : categoryId === 0 || categoryId === 4 ? (
              <PizzaItem key={idx} pizza={pizza} />
            ) : (
              Object.values(pizza.classifications)[categoryId - 1] === true && (
                <PizzaItem key={idx} pizza={pizza} />
              )
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
