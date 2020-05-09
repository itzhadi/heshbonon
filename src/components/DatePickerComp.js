import React from 'react'
import moment from 'moment';
import {connect} from 'react-redux'
import DatePicker , {registerLocale} from 'react-datepicker'
import{showHideDatePicker,decrementMonth,incrementMonth,changeMonth,changeStartDate} from '../actions'
import "react-datepicker/dist/react-datepicker.css";
import 'moment/locale/he';
import he from "date-fns/locale/he"; 
registerLocale("he", he); 

class DatePickerComp extends React.Component{

     decrementMonth = () => {
        this.props.decrementMonth();
    }

    incrementMonth = () => {
            this.props.incrementMonth();
    }

    handleChange = date =>{
        this.props.changeStartDate(date)
        this.props.changeMonth(moment(date));
        this.showHideDatePicker();
    }

    showHideDatePicker = () =>{
            this.props.showHideDatePicker(!this.props.showDatePickerFlag);
    }

    render(){
            const {showDatePickerFlag,month,startDate} = this.props;
            return(    
                        <div className="datePickerStyle">    
                            <h1 className="datePickerStyle">
                                <span onClick={this.incrementMonth}>
                                    {month.clone().add(1, 'month') > moment() ? '' : <i className="chevron left icon" style={{marginRight:1}}></i>}
                                </span>

                                <span>{month.format('YYYY - MMMM')}</span>
                                <span onClick={this.decrementMonth}> {<i className="chevron right icon" style={{marginLeft:-18 , marginRight:-10}}></i>} </span>  
                                <span onClick={this.showHideDatePicker}><i className="calendar alternate outline icon"></i> </span>

                                {showDatePickerFlag ?
                                <DatePicker
                                locale="he"
                                className="monthPickerStyle"
                                selected={startDate}
                                onChange={this.handleChange}
                                onClickOutside={this.showHideDatePicker}
                                dateFormat="yyyy - MMMM"
                                showMonthYearPicker
                                showFullMonthYearPicker
                                maxDate={new Date()}
                                />
                                : null}
                            </h1>
                        </div>
                  );
            }
    }

const mapStateToProps = (state) => {
    return {isSignedIn:state.auth.isSignedIn,
            showDatePickerFlag : state.datePicker.showDatePickerFlag,
            month:state.datePicker.month,
            startDate:state.datePicker.startDate
            };
}

export default connect(mapStateToProps,
    {showHideDatePicker,
    incrementMonth,
    decrementMonth,
    changeMonth,
    changeStartDate})
    (DatePickerComp);