import { useState } from 'react';
import './categories.scss';

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState<Number>(0);

  const categories = ['Рекомендуем', 'Без мяса', 'Сладкая', 'Акции', 'Напитки'];

  const onClickCategory = (i: Number) => {
    setActiveIndex(i);
  };

  return (
    <div className='categories'>
      <ul>
        {categories.map((category, i) => (
          <li
            key={category}
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? 'button active' : 'button'}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
