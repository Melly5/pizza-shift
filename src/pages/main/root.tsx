import { Header } from '../../components/header/header';
import './main.scss';
export const MainPage = () => {
  const speciesArray = [
    '/files/main/ingredients/olives.png',
    '/files/main/ingredients/cheese.png',
    '/files/main/ingredients/pepper.png',
    '/files/main/ingredients/pepperoni.png',
    '/files/main/ingredients/bacon.png',
    '/files/main/ingredients/chicken.png',
    '/files/main/ingredients/beef.png',
    '/files/main/ingredients/sausages.png'
  ];

  return (
    <div className='main-page'>
      <Header/>
      <div className='content'>
        <ul className='advantages-circle'>
          {speciesArray.map((image) => (
            <li className='advantages-circle__element'>
              <img src={image} alt='' />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
