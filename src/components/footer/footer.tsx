import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='content'>
        <p className='name'>SANTORINIZ</p>
        <p className='copyright'>Copyright © 2000 - 2023</p>
      </div>
      <div className='content'>
        <img src='files/footer/facebook.svg' alt='facebook' />
        <img src='files/footer/twitter.svg' alt='twitter' />
        <img src='files/footer/instagram.svg' alt='instagram' />
      </div>
    </div>
  );
};
