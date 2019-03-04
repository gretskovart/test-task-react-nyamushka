import React from 'react';

import './weight.less';

const Weight = (props) => {
  const {weight, status} = props;

  return(
    <div className={"product__weight weight weight--" + status}>
      <span className="weight__quantity">{weight}</span><br />
      <span className="weight__measure">кг</span>
    </div>
  );
};

export default Weight;