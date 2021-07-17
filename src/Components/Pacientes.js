import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../style.css';
import ButtonCount from './buttonCount';
import ShowUsers from './ShowUsers';

export default function Pacientes() {
  const [users, setUsers] = useState([]);

  return (
    <Fragment>
      <div>
        <ShowUsers users={users} />
      </div>
    </Fragment>
  );
}
