import {SHOW_HIDE_DATE_PICKER,
       DECREMENT_MONTH,
       INCREMENT_MONTH,
       CHANGE_MONTH,
       CHANGE_START_DATE} from '../actions/types'
import moment from 'moment';

const INTIAL_STATE ={
    showDatePickerFlag:false,
    month:moment(),
    startDate:new Date(),
    justToChangeTheMoment:true
}

export default (state = INTIAL_STATE , action) => {
    
    switch(action.type){
                    case SHOW_HIDE_DATE_PICKER:{
                        const {showDatePickerFlag} = action.payload;
                        return {...state, showDatePickerFlag:showDatePickerFlag};
                    }
                    case DECREMENT_MONTH:{
                        return {...state,month: state.month.subtract(1,'month'),startDate:state.month.toDate()};
                    }
                    case INCREMENT_MONTH:{
                        return {...state,month:state.month.add(1,'month') ,startDate:state.month.toDate()};
                    }
                    case CHANGE_MONTH:{
                        const {month} = action.payload;
                        return{...state,month:month}
                    }
                    case CHANGE_START_DATE:{
                        const {date} = action.payload;
                        return {...state,startDate:date}
                    }
                    default:
                        return state;
    }
};