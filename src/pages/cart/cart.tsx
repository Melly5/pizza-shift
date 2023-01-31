import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import './cart.scss';

export const Cart = () => {
  const isOrdered = true;

  return (
    <div>
      <Header />
      <div className='main-cart'>
        <p className='article'>Оформить заказ</p>
        <div className='order content'>
          <p className='title'>2 товара на 1398 ₽ </p>
          <div className='order-items'>
            <div className='order-item'>
              <div>
                <img
                  src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                  width={150}
                  height={150}
                  alt='pizza'
                />
                <div className='item-info'>
                  <p style={{ fontSize: '22px', fontWeight: '600' }}>Аррива!</p>
                  <p style={{ fontSize: '18px' }}>Средняя, 100см. Традиционное тесто</p>
                </div>
                <p className='price'>649 ₽</p>
              </div>
              <div>
                <div className='item-amount'>
                  <img
                    className='operators'
                    src='/files/minus.svg'
                    width={10}
                    height={13}
                    style={{ margin: '0 19px 0 2px' }}
                    alt='minus'
                  />
                  <div>1</div>
                  <img
                    className='operators'
                    src='/files/plus.svg'
                    width={17}
                    height={17}
                    style={{ marginLeft: '18px' }}
                    alt='plus'
                  />
                </div>
                <div className=''>
                  <img
                    src='/files/delete.svg'
                    width={20}
                    height={20}
                    style={{ marginRight: '10px' }}
                    alt='delete'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOrdered ? (
          <div style={{ width: '100%' }}>
            <div className='contacts content'>
              <p className='title'>Контактные данные</p>
              <div className='inputs'>
                <input className='input large' type='text' name='surname' placeholder='Фамилия' />
                <input className='input medium' type='text' name='name' placeholder='Имя' />
                <input className='input medium' type='text' name='surname' placeholder='Отчество' />
                <div className='check-item'>
                  <input className='checkbox' type='checkbox' />
                  <p> Нет отчества</p>
                </div>
              </div>
              <div className='inputs'>
                <input
                  className='input large'
                  type='text'
                  name='surname'
                  placeholder='Номер телефона'
                />
                <input
                  className='input medium'
                  type='text'
                  name='surname'
                  placeholder='Дата рождения'
                />
              </div>
            </div>
            <div className='address content'>
              <p className='title'>Адрес доставки</p>
              <div className='inputs'>
                <input className='input large' type='text' name='surname' placeholder='Город' />
                <input className='input medium' type='text' name='name' placeholder='Улмца' />
                <input className='input smallest' type='text' name='surname' placeholder='Дом' />
                <input className='input small' type='text' name='surname' placeholder='Квартира' />
                <div className='check-item'>
                  <input className='checkbox' type='checkbox' />
                  <p> Нет отчества</p>
                </div>
              </div>
              <div className='inputs'>
                <textarea className='input textarea' placeholder='Заметки для курьера' />
              </div>
            </div>
            <div className='content'>
              <div className='button large'>Отправить заказ</div>
            </div>
          </div>
        ) : (
          <div className='post-order'>
            <p>Ваш заказ принят!</p>
            <img src='files/pizza.png' />
            <p>Доставим по указанному адресу в течение 30 минут</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
