import React from 'react'
import moment from 'moment';
import {connect} from 'react-redux'
import DatePicker , {registerLocale} from 'react-datepicker'
import{showHideDatePicker} from '../actions'
import "react-datepicker/dist/react-datepicker.css";
import 'moment/locale/he';
import he from "date-fns/locale/he"; 
registerLocale("he", he); 

class DatePickerComp extends React.Component{

    state = { month : moment(),
             startDate:new Date()}

     decrementMonth = () => {
        this.setState(
            prevState => ({month : prevState.month.subtract(1,'month')}),
            console.log(this.state.month)
        );
    }

    incrementMonth = () => {
        this.setState(
            prevState => ({month:prevState.month.add(1,'month')}),
            console.log(this.state.month)
            );
    }

    handleChange = date =>{
        console.log(date);
        this.setState({startDate:date , showDatePickerFlag:!this.state.showDatePickerFlag});
    }

    showHideDatePicker = () =>{
            this.props.showHideDatePicker(!this.props.showDatePickerFlag);
    }

    render(){
            const {isSignedIn,showDatePickerFlag} = this.props;
            return(
                    isSignedIn ?
                    (     
                        <div className="datePickerStyle">    
                            <h1 className="datePickerStyle">
                                <span onClick={this.incrementMonth}>
                                {this.state.month.clone().add(1, 'hour') > moment() ? '' : <i className="chevron circle left icon"></i>}
                                </span>
                                <span>{this.state.month.format('YYYY - MMMM')}</span>
                                <span onClick={this.decrementMonth}> {<i className="chevron circle right icon"></i>} </span>  
                                <span onClick={this.showHideDatePicker}><i className="calendar alternate outline icon"></i> </span>
                                {showDatePickerFlag ?
                                <DatePicker
                                locale="he"
                                className="monthPickerStyle"
                                selected={this.state.startDate}
                                onChange={this.showHideDatePicker}
                                onClickOutside={this.showHideDatePicker}
                                dateFormat="yyyy - MMMM"
                                showMonthYearPicker
                                showFullMonthYearPicker
                                maxDate={new Date()}/>
                                : null}
                            </h1>
                        </div>
                    ) : null
                  );
            }
    }

const mapStateToProps = (state) => {
    return {isSignedIn:state.auth.isSignedIn,
            showDatePickerFlag : state.datePicker.showDatePickerFlag
            };
}

export default connect(mapStateToProps,{showHideDatePicker})(DatePickerComp);