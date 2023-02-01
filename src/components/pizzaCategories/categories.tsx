import { useState } from 'react';
import './categories.scss';
interface Category {}
export const Categories = ({ value, onClickCategory }: any) => {
  const categories = ['Рекомендуем', 'Без мяса', 'Сладкая', 'Акции', 'Напитки'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? 'button active' : 'button'}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
