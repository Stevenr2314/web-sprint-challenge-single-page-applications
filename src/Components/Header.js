import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    return (
        <div>
            <h1>Lambda Eats</h1>
            <Link to={'/'}>
                <button>HOME</button>
            </Link>
            <Link to={'pizza'}>
                <button>PIZZA</button>
            </Link>

        </div>

    )
}

export default Header;