import React, { Fragment, useState, useEffect } from 'react';
import './style.css';
import ButtonCount from './buttonCount';
export default function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const componentDidMount = () => {
      const apiUrl = 'https://spring-boot-back.herokuapp.com/api/users/all';
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => setUsers(data));
    };
    //componentDidMount();
  }, []);

  return (
    <Fragment>
      <div>
        <ButtonCount count={count} setCount={setCount} />
      </div>
    </Fragment>
  );
}
