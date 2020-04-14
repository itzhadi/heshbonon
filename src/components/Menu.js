import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () =>{
    return (

        <div class="ui vertical labeled icon menu" dir="right">
            <Link to="/" class="item">
                <i class="home icon"></i>
                בית
            </Link>
            <Link to="/Balance" class="item">
                <i class="balance scale icon"></i>
                מאזן
            </Link>
            <Link to="/History" class="item">
                <i class="history icon"></i>
                היסטוריה
            </Link>
            <Link to="/AddIncome" class="item">
                <i class="plus icon"></i>
                הוסף הכנסה
            </Link>
        </div>
            );
};

export default Menu;



//ui vertical labeled icon menu