import {SHOW_HIDE_DATE_PICKER} from '../actions/types'

const INTIAL_STATE ={
    showDatePickerFlag:false
}

export default (state = INTIAL_STATE , action) => {
    
    switch(action.type){
        case SHOW_HIDE_DATE_PICKER:{
                        const {showDatePickerFlag} = action.payload;
                        return {...state, showDatePickerFlag:showDatePickerFlag};
                    }
        default:
            return state;
    }
};