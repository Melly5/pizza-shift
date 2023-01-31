import './pizzaItem.scss';

export const PizzaItem = ({ pizza }: any) => {
  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={pizza.img} alt='Pizza' />
      <div className='pizza-block__name'>
        <h4 className='title'>{pizza.name}</h4>
        <div>{pizza.price.size.medium} см</div>
      </div>
      <div className='pizza-block__ingredients'>
        {pizza.ingredients.map((ingredient: String) => (
          <>{ingredient}, </>
        ))}
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>{pizza.price.default} ₽</div>
        <div className='button active '>Добавить</div>
      </div>
    </div>
  );
};
