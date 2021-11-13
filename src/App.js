import React, { useState } from "react"
import PizzaForm from "./Components/PizzaForm.js"
import Home from "./Components/Home.js"
import Header from "./Components/Header.js"
import pizzaImg from './Assets/Pizza.jpg'
import { Route } from 'react-router-dom'
import axios from 'axios';

function App (){
  const [form, setForm] = useState({name:'', size:'', sauce:'', substitute: false, toppings: [],  quantity: '', special:''});

  const onSubmit = ()=>{
    const newOrder = {...form};
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(resp => {
        console.log(resp)
        setForm({name:'', size:'', sauce:'', substitute: false, toppings: [],  quantity: '', special:''})
      })
      .catch(err => console.log(err))
  }

  const onChange = (name, value)=>{
    setForm({...form, [name]: value})
  }

  return (
    <>
      <Header></Header>
      <Route path={'/pizza'}>
        <PizzaForm 
        pizzaImg={pizzaImg}
        form={form}
        submit={onSubmit}
        change={onChange}/>
      </Route>
      <Route exact path={'/'}>
        <Home />
      </Route>
      
    </>
  );
};
export default App;
