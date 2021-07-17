import React, { Fragment } from 'react';

const ButtonCount = props => {
  const { count, setCount } = props;

  const sumarCount = () => {
    setCount(count + 1);
    console.log('Sumando');
  };

  return (
    <Fragment>
      <a>{count}</a>
      <button onClick={sumarCount}>Suma</button>
    </Fragment>
  );
};
export default ButtonCount;
