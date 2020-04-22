import {
        SIGN_IN,
        SIGN_OUT,
        SHOW_HIDE_DATE_PICKER,
        DECREMENT_MONTH,
        INCREMENT_MONTH,
        CHANGE_MONTH,
        CHANGE_START_DATE
        } from './types'

export const signIn = (userId,userName,userImg) => {
    return {
    type: SIGN_IN,
    payload:{userId,userName,userImg}
    };
};

export const signOut = () => {
    return {
    type: SIGN_OUT
    };
};

export const showHideDatePicker = (showDatePickerFlag) =>{
    return{
        type: SHOW_HIDE_DATE_PICKER,
        payload:{showDatePickerFlag}
    };
}

export const decrementMonth = () =>{
    return{
        type: DECREMENT_MONTH
    };
}

export const incrementMonth = () =>{
    return{
        type: INCREMENT_MONTH
    };
}

export const changeMonth = (month) =>{
    return{
        type: CHANGE_MONTH,
        payload:{month}
    };
}

export const changeStartDate = (date) =>{
    return{
        type: CHANGE_START_DATE,
        payload:{date}
    };
}