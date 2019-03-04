import React from 'react';

import './special.less';

const Special = (props) => {
  const {quantity, special, status} = props;

  return(
    <div className={"product__special special special--" + status}>
      <span className="special__quantity">{quantity}</span><br />
      <span className="special__bonus">{special}</span>
    </div>
    );
};

export default Special;