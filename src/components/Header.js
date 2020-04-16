import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth'
import UserNameAndImg from './UserNameAndImg';
import Date from './DateComp';

const Header = () =>{
    return (
        <div className="ui container">
        <div className="ui labeled icon menu" dir="rtl">
            <div className="right menu">     
                    <Link to="/" className="item">
                        <i className="home icon"></i>
                        בית
                     </Link>
                    <Link to="/Balance" className="item">
                        <i className="balance scale icon"></i>
                        מאזן
                    </Link>
                    <Link to="/History" className="item">
                        <i className="history icon"></i>
                        היסטוריה
                    </Link>
                    <Link to="/AddIncome" className="item">
                        <i className="plus icon"></i>
                        הוסף הכנסה
                    </Link>
                    
            </div>
            <div className="ui item">
                <Date/>
            </div>
            <div className="ui item">
                 <GoogleAuth/>
            </div>
            <UserNameAndImg/>
      </div>
      </div>
    );
};

export default Header;

// <div className="ui icon input">
//                         <input type="text" size="50" dir="rtl" placeholder="חיפוש..."/>
//                         <i className="search link icon"></i>
//                     </div>