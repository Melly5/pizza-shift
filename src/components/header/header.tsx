import './header.scss';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='main-header'>
      <p className='name'>SANTORINIZ</p>
      <img
        className='image'
        src='../../assets/images/header/pepper.png'
        alt='pepper'
        width={100}
        height={50}
      />
      <div className='variants'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <p>Главная</p>
        </Link>
        <Link to='/pizzas' style={{ textDecoration: 'none' }}>
          <p>Выбрать пиццу</p>
        </Link>
        <Link to='/pizzas' style={{ textDecoration: 'none' }}>
          <p>Оформить заказ</p>
        </Link>
      </div>
    </div>
  );
};
