import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: 'https://spring-boot-back.herokuapp.com/api'
});

export default clienteAxios;
