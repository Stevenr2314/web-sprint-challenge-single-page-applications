import React, {useState} from "react";
import styled from "styled-components";
import './PizzaForm.css'
import * as Yup from 'yup';

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

    const handleChange = (event) =>{
        const {name, value, type, checked} = event.target;
        const valueToUse = (type === 'checkbox' ? checked : value);
        props.change(name, valueToUse);
    }

    return(
        <FormDiv id='pizza-form'>
            <h2>Build Your Own Pizza</h2>
            <img src={pizzaImg} alt='Pizza' className='pizzaImg' />
            <h3> Enter your name </h3>
            <input type='text' id='name-input' name='name' placeholder='Name' onChange={event => handleChange(event)}/>
            <label htmlFor='size-dropdown'><h3>Choose a Size</h3></label>
            <LightSectionDiv>
                <select id='size-dropdown' onChange={event => handleChange(event)}>
                    <option>--Select Size--</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </LightSectionDiv>
            <h3>Choice of Sauce</h3>
            <LightSectionDiv className='columnDiv'>
                <label htmlFor='ogRed'> <input id='ogRed' type='radio' value='originalRed' /> Original Red</label>
                <label htmlFor='garlicRanch'> <input id='garlicRanch' type='radio' value='garlicRanch' /> Garlic Ranch</label>
                <label htmlFor='bbqSauce'> <input id='bbqSauce' type='radio' value='bbqsauce' /> BBQ Sauce</label>
                <label htmlFor='spinachAlfredo'> <input id='spinachAlfredo' type='radio' value='spinachAlfredo' /> Spinach Alfredo</label>
            </LightSectionDiv>
            <h3>Choose Toppings</h3>
            <p>Select up to 10</p>
            <LightSectionDiv className='columnDiv'>
                <label className='toppings' htmlFor='pepperoni'> <input id='pepperoni' type='checkbox' value='pepperoni' /> Pepperoni</label>
                <label className='toppings' htmlFor='sausage'> <input id='sausage' type='checkbox' value='sausage' /> Sausage</label>
                <label className='toppings' htmlFor='caBacon'> <input id='caBacon' type='checkbox' value='canadianBacon' /> Canadian Bacon</label>
                <label className='toppings' htmlFor='spicyItalianSausage'> <input id='spicyItalianSausage' type='checkbox' value='spicyItalianSausage' /> Spicy Italian Sausage</label>
                <label className='toppings' htmlFor='grilledChicken'> <input id='grilledChicken' type='checkbox' value='grilledChicken' /> Grilled Chicken</label>
                <label className='toppings' htmlFor='onions'> <input id='onions' type='checkbox' value='onions' /> Onions</label>
                <label className='toppings' htmlFor='greenPepper'> <input id='greenPepper' type='checkbox' value='greenPepper' /> Green Pepper</label>
                <label className='toppings' htmlFor='dicedTomato'> <input id='dicedTomato' type='checkbox' value='dicedTomato' /> Diced Tomato</label>
                <label className='toppings' htmlFor='blackOlives'> <input id='blackOlives' type='checkbox' value='blackOlives' /> Black Olives</label>
                <label className='toppings' htmlFor='roastedGarlic'> <input id='roastedGarlic' type='checkbox' value='roastedGarlic' /> Roasted Garlic</label>
                <label className='toppings' htmlFor='artichokeHearts'> <input id='artichokeHearts' type='checkbox' value='artichokeHearts' /> Artichoke Hearts</label>
                <label className='toppings' htmlFor='threeCheese'> <input id='threeCheese' type='checkbox' value='threeCheese' /> Three Cheese</label>
                <label className='toppings' htmlFor='pineapple'> <input id='pineapple' type='checkbox' value='pineapple' /> Pineapple</label>
                <label className='toppings' htmlFor='extraCheese'> <input id='extraCheese' type='checkbox' value='extraCheese' /> Extra Cheese</label>
            </LightSectionDiv>
            <h3>Choose a Substitute</h3>
            <LightSectionDiv className='rowDiv'>
                <label className='switch'>
                    <input type='checkbox'/>
                    <span className='slider'></span>
                </label>
                <p >Gluten Free Crust (+ $1.00)</p>
            </LightSectionDiv>
            <h3>Special Instructions</h3>
            <LightSectionDiv className='bottomDiv'>
                <label htmlFor='specialInstructions'>
                    <textarea id='specialInstructions' placeholder='Write any special instructions here...'></textarea>
                </label>
            </LightSectionDiv>
            <div>
                <input type='number' name='quantity'/>
                <span className='addToOrderBtn'>
                    <span>Add to Order</span><span>$Price</span>
                </span>
            </div>

        </FormDiv>
    )
}

export default PizzaForm;