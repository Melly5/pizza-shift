import React from 'react';
import './pizzaItem.scss';

export const PizzaItem = ({ pizza }: any) => {
  return (
    <div className='pizza-block'>
      <img className='image' src={pizza.img} alt='pizza' />
      <div className='name'>
        <h4 className='title'>{pizza.name}</h4>
        <div>{pizza.price.size.medium} см</div>
      </div>
      <div className='ingredients'>
        {pizza.ingredients.map((ingredient: string, id: number) => (
          <>{ingredient}, </>
        ))}
      </div>
      <div className='bottom'>
        <div className='price'>{pizza.price.default} ₽</div>
        <button className='button active'>Добавить</button>
      </div>
    </div>
  );
};
