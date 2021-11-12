import React, { useState } from "react"
import PizzaForm from "./Components/PizzaForm.js"
import Home from "./Components/Home.js"
import Header from "./Components/Header.js"
import pizzaImg from './Assets/Pizza.jpg'
import { Route } from 'react-router-dom'
import axios from 'axios';

const App = () => {
  const [form, setForm] = useState({name:'', size:'', sauce:'', substitute:'', toppings: [],  quantity:'', special:''});

  const onSubmit = ()=>{
    const newOrder = {...form};
    axios.post('https://reqres.in/api/orders', newOrder)
  }

  return (
    <>
      <Header></Header>
      <Route path={'/pizza'}>
        <PizzaForm pizzaImg={pizzaImg}/>
      </Route>
      <Route exact path={'/'}>
        <Home />
      </Route>
      
    </>
  );
};
export default App;
