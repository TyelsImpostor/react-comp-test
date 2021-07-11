import React, { Fragment, useState, useEffect } from 'react';
import './style.css';
import ButtonCount from './buttonCount';
import ShowUsers from './ShowUsers';

export default function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const componentDidMount = () => {
      fetch('https://spring-boot-back.herokuapp.com/api/users/all')
        .then(response => response.json())
        .then(data => setUsers(data));
    };
    componentDidMount();
  }, []);

  return (
    <Fragment>
      <div>
        <ButtonCount count={count} setCount={setCount} />
        <br />
        <ShowUsers users={users} />
      </div>
    </Fragment>
  );
}
