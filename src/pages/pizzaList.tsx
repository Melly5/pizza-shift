import { Header } from '../components/header/header';
import '../assets/scss/components/pizzaList.scss';

export const PizzaList = () => {
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
          <div className='pizza-block'>
            <img
              className='pizza-block__image'
              src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
              alt='Pizza'
            />
            <div className='pizza-block__name'>
              <h4 className='title'>Чизбургер-пицца</h4>
              <div>35 см</div>
            </div>
            <div className='pizza-block__description'>
              Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок
            </div>
            <div className='pizza-block__bottom'>
              <div className='pizza-block__price'>395 ₽</div>
              <div className='button active '>Добавить</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
