import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return (

        <div className="ui labeled icon menu" dir="rtl">
            <div className="right menu">
                        
                    <Link to="/" className="item">
                        <i class="home icon"></i>
                        בית
                     </Link>
                    <Link to="/Balance" className="item">
                        <i class="balance scale icon"></i>
                        מאזן
                    </Link>
                    <Link to="/History" className="item">
                        <i class="history icon"></i>
                        היסטוריה
                    </Link>
                    <Link to="/AddIncome" className="item">
                        <i class="plus icon"></i>
                        הוסף הכנסה
                    </Link>
                    <div className="ui icon input">
                        <input type="text" size="50" dir="rtl" placeholder="חיפוש..."/>
                        <i className="search link icon"></i>
                    </div>
            </div>
        <a className="ui item">
            Logout
          </a>
      </div>
    );
};

export default Header;