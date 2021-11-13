import React, {useState} from "react";
import styled from "styled-components";
import './PizzaForm.css'
import * as Yup from 'yup';
import toppingsArray from "./toppings";


// *********Yup Schema************
// *********Yup Schema************
// *********Yup Schema************

// const formSchema = Yup.object.shape({

// })

// *********STYLED COMPONENTS************
// *********STYLED COMPONENTS************
// *********STYLED COMPONENTS************
const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60%;
    background: #f0f8ff;
    width: 60%;
    margin: 2% 0 5% 15%;
`;

const LightSectionDiv = styled.div`
    max-height: 25vh;
    background: #FFFAF0;
`;

// *********PIZZA FORM JSX************
// *********PIZZA FORM JSX************
// *********PIZZA FORM JSX************
const PizzaForm = (props)=>{
    const {pizzaImg} =props
    const [toppings, setToppings] = useState([])

    const handleChange = (event) =>{
        const {name, value, type, checked} = event.target;
        const valueToUse = type==='checkbox' ? checked : value
        props.change(name, valueToUse);
    }

    const handleCheckboxChange = (event) =>{
        let newToppingsArray = [...toppings, event.target.id];
        if (toppings.includes(event.target.id)){
            newToppingsArray = newToppingsArray.filter(topping => topping !== event.target.id)
        }
        setToppings(newToppingsArray)
        props.change('toppings', toppings)
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return(
        <FormDiv id='pizza-form'>
            <h2>Build Your Own Pizza</h2>
            <img src={pizzaImg} alt='Pizza' className='pizzaImg' />
            <h3> Enter your name </h3>
            <input type='text' id='name-input' name='name' placeholder='Name' value={props.form.name} onChange={event => handleChange(event)}/>
            <label htmlFor='size-dropdown'><h3>Choose a Size</h3></label>
            <LightSectionDiv>
                <select name='size' id='size-dropdown' onChange={event => handleChange(event)}>
                    <option>--Select Size--</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </LightSectionDiv>
            <h3>Choice of Sauce</h3>
            <LightSectionDiv className='columnDiv'>
                <label htmlFor='ogRed'> <input id='ogRed' name='sauce' type='radio' value='originalRed' onChange={event => handleChange(event)}/> Original Red</label>
                <label htmlFor='garlicRanch'> <input id='garlicRanch' name='sauce' type='radio' value='garlicRanch' onChange={event => handleChange(event)}/> Garlic Ranch</label>
                <label htmlFor='bbqSauce'> <input id='bbqSauce' name='sauce' type='radio' value='bbqsauce' onChange={event => handleChange(event)}/> BBQ Sauce</label>
                <label htmlFor='spinachAlfredo'> <input id='spinachAlfredo' name='sauce' type='radio' value='spinachAlfredo' onChange={event => handleChange(event)}/> Spinach Alfredo</label>
            </LightSectionDiv>
            <h3>Choose Toppings</h3>
            <p>Select up to 10</p>
            <LightSectionDiv className='columnDiv'>
                {toppingsArray.map(topping => {return(
                    <label className='toppings' htmlFor={topping.codeName}> <input id={topping.codeName} type='checkbox' onChange={event => handleCheckboxChange(event)} /> {topping.name}</label>

                )})}
            </LightSectionDiv>
            <h3>Choose a Substitute</h3>
            <LightSectionDiv className='rowDiv'>
                <label className='switch'>
                    <input type='checkbox' name='substitute' checked={props.form.substitute} onChange={event => handleChange(event)}/>
                    <span className='slider'></span>
                </label>
                <p >Gluten Free Crust (+ $1.00)</p>
            </LightSectionDiv>
            <h3>Special Instructions</h3>
            <LightSectionDiv className='bottomDiv'>
                <label htmlFor='specialInstructions'>
                    <textarea id='specialInstructions' name='special' placeholder='Write any special instructions here...' value={props.form.special} onChange={event => handleChange(event)}></textarea>
                </label>
            </LightSectionDiv>
            <div class='orderDiv'>
                <input type='number' name='quantity' onChange={event => handleChange(event)}/>
                <span className='addToOrderBtn' onClick={event => handleSubmit(event)}>
                    <span>Add to Order</span><span className='price'>$Price</span>
                </span>
            </div>

        </FormDiv>
    )
}

export default PizzaForm;