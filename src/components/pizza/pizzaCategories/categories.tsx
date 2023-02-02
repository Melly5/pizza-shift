import './categories.scss';

export const Categories = ({ value, onClickCategory }: any) => {
  const categories = ['Рекомендуем', 'Новинки', 'Без мяса', 'Острая', 'Акции'];

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
