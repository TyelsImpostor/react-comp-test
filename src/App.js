import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './Components/Users';
import NuevoPaciente from './Components/NuevoPaciente';
import clienteAxios from './config/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  const [users, guardarUsers] = useState([]);

  useEffect(() => {
    const consultarAPI = () => {
      clienteAxios
        .get('/users/all')
        .then(response => {
          guardarUsers(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
    consultarAPI();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Users users={users} />} />
        <Route exact path="/nueva" component={NuevoPaciente} />
      </Switch>
    </Router>
  );
}
