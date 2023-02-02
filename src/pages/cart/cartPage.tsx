import { Header } from '../../components/header/header';
import { OrderList } from '../../components/cart/orderList/orderList';
import { Footer } from '../../components/footer/footer';
import './cart.scss';
import { ContactsForm } from '../../components/cart/contactsForm/contactsForm';

export const Cart = () => {
  const isOrdered = false;

  return (
    <>
      <Header />
      <section className='main-cart'>
        <p className='article'>Оформить заказ</p>
        <section>
          <p className='title'>2 товара на 1398 ₽ </p>
          <OrderList />
        </section>
        {isOrdered ? (
          <div className='post-order'>
            <p>Ваш заказ принят!</p>
            <img src='files/pizza.png' />
            <p>Доставим по указанному адресу в течение 30 минут</p>
          </div>
        ) : (
          <div style={{ width: '100%' }}>
            <ContactsForm/>
            <section>
              <p className='title'>Адрес доставки</p>
              <div className='inputs'>
                <input className='input large' type='text' name='surname' placeholder='Город' />
                <input className='input medium' type='text' name='name' placeholder='Улмца' />
                <input className='input smallest' type='text' name='surname' placeholder='Дом' />
                <input className='input small' type='text' name='surname' placeholder='Квартира' />
              </div>
              <textarea className='input textarea' placeholder='Заметки для курьера' />
            </section>
            <section>
              <div className='button large'>Отправить заказ</div>
            </section>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};
