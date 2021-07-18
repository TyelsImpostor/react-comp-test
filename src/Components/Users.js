import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import '../style.css';

export default function Users(props) {
  const { users } = props;
  /*const KeysUsers = () => {
    for (var key in users[0]) {
      console.log(key);
    }
  };*/

  if (!users.length) return null;
  return (
    <Fragment>
      {users.map(user => (
        <>
          <a>{user.username}</a>
          <br />
        </>
      ))}
      <Button variant="primary">Crear </Button>
    </Fragment>
  );
}
