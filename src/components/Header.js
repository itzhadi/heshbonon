import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return (

        <div class="ui fluid three item menu" dir="center">
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

export default Header;



//ui vertical labeled icon menu