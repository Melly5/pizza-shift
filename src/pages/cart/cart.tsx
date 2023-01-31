import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import './cart.scss';

export const Cart = () => {
  return (
    <div>
      <Header />
      <div className='main-cart'>
        <p className='article'>Оформить заказ</p>
        <div className='order'>
          <p className='order-total'>2 товара на 1398 ₽ </p>
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
              </div>
              <div>
                <p className='price'>649 ₽</p>
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
        <div></div>

        <div className='pizzas'></div>
      </div>
      <Footer />
    </div>
  );
};
