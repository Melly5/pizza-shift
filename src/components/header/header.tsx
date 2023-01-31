import { Link } from 'react-router-dom';
import './header.scss';

export const Header = () => {
  return (
    <div className='main-header'>
      <p className='name'>SANTORINIZ</p>
      <img className='image' src='/files/pepper.png' alt='pepper' width={150} height={90} />
      <div className='variants'>
        <Link className='link' to='/'>
          <p>Главная</p>
        </Link>
        <Link className='link' to='/pizzas'>
          <p>Выбрать пиццу</p>
        </Link>
        <Link className='link' to='/cart'>
          <p>Оформить заказ</p>
        </Link>
      </div>
    </div>
  );
};
