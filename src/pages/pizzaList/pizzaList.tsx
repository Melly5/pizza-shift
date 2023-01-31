import { Header } from '../../components/header/header';
import './pizzaList.scss';
import { useQuery } from 'react-query';
import { PizzaService } from '../../utils/api/requests';
import { Footer } from '../../components/footer/footer';
import { PizzaItem } from '../../components/pizzaItem/pizzaItem';

export const PizzaList = () => {
  const { data, isLoading, error } = useQuery('pizzas', () => PizzaService.getAll());

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <Header />
      <div className='main_pizza'>
        <p>Выбрать пиццу</p>
        <div className='categories'>
          <ul>
            <li className='button active'>Рекомендуем</li>
            <li className='button'>Без мяса</li>
            <li className='button'>Сладкая</li>
            <li className='button'>Акции</li>
            <li className='button'>Напитки</li>
          </ul>
        </div>
        <div className='pizzas'>
          {data?.data.map((pizza: any, idx: Number) => (
            <PizzaItem key={idx} pizza={pizza} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
