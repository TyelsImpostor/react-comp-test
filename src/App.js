import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pacientes from './Components/Pacientes';
import NuevoPaciente from './Components/NuevoPaciente';
import clienteAxios from './config/axios';
export default function App() {
  const [tutorial, guardarTutorial] = useState([]);

  useEffect(() => {
    //const componentDidMount = () => {
    //    consultarAPI = () => {

    const consultarAPI = () => {
      clienteAxios
        .getAll('/tutorials')
        .then(response => {
          console.log(response);
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
        <Route exact path="/" component={Pacientes} />
        <Route exact path="/nueva" component={NuevoPaciente} />
      </Switch>
    </Router>
  );
}
