import { useQuery } from 'react-query';
import { Header } from '../../components/header/header';
import { PizzaService } from '../../utils/api/requests';
import { PizzaItem } from '../../components/pizzaItem/pizzaItem';
import { Footer } from '../../components/footer/footer';
import './pizzaList.scss';

export const PizzaList = () => {
  const { data, isLoading } = useQuery('pizzas', () => PizzaService.getAll());

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <Header />
      <div className='main-pizza'>
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
