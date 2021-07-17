import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../style.css';
import ButtonCount from './buttonCount';
import ShowUsers from './ShowUsers';

export default function NuevoPaciente() {
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
        <ShowUsers users={users} />
      </div>
    </Fragment>
  );
}
