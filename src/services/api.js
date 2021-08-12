import axios from "axios";

//Base URL >https://sujeitoprogramador.com
///r-api/?api=filmes  (Todos os Filmes) 
///r-api/?api=filmes/123  (FIlme com ID 123)

const api = axios.create({
  baseURL:'https://sujeitoprogramador.com'
  
})

export default api;
