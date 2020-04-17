import React from 'react'
import moment from 'moment';
import {connect} from 'react-redux'
import 'moment/locale/he';

class DatePicker extends React.Component{

    state = { month : moment()}
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

    showDatePicker = () =>{
        console.log(this.state.month)
    }

    render(){
            const {isSignedIn} = this.props
            return(
                    isSignedIn ?
                    (         
                        <h1 className="datePickerStyle">
                            <span onClick={this.incrementMonth}>
                            {this.state.month.clone().add(1, 'hour') > moment() ? '' : <i className="chevron circle left icon"></i>}
                            </span>
                            <span onClick={this.showDatePicker}>{this.state.month.format('YYYY - MMMM')}</span>
                            <span onClick={this.decrementMonth}> {<i className="chevron circle right icon"></i>} </span>    
                        </h1>
                        ) : null
                    );
    }

}

const mapStateToProps = (state) => {
    return {isSignedIn:state.auth.isSignedIn};
}

export default connect(mapStateToProps)(DatePicker);