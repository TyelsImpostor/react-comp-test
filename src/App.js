import React, { Fragment, useState } from 'react';
import './style.css';
import ButtonCount from './buttonCount';
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <div>
        <ButtonCount count={count} setCount={setCount} />
      </div>
      <a>{count}</a>
    </Fragment>
  );
}
