import './mystyle.css'
import React  from 'react';
import Moment from 'react-moment';

class DateComp extends React.Component {
    render() {
        const date = new Date();
        return (
           <div className="dateStyle">
            <Moment format="DD/MM/YYYY">{date}</Moment>
            </div>
        );
    }
}

export default DateComp;

