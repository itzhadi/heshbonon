import {
        SIGN_IN,
        SIGN_OUT,
        SHOW_HIDE_DATE_PICKER
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