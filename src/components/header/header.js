import React from 'react';

import './font/Exo2.0-Thin.otf';
import './header.less';

const Header = () => {
  return (
    <header className="products-list__header header">
      <h1 className="header__title">Ты сегодня покормил кота?</h1>
    </header>
  );
};

export default Header;