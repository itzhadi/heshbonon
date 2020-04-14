import {SIGN_IN,SIGN_OUT} from '../actions/types'

const INTIAL_STATE ={
    isSignedIn:null,
    userId:null,
    userName:null,
    userImg:null
}

export default (state = INTIAL_STATE , action) => {
    
    switch(action.type){
        case SIGN_IN:{
                        const {userId,userName,userImg} = action.payload
                        return {...state, isSignedIn:true , userId:userId , userName:userName , userImg:userImg}
                    }
        case SIGN_OUT:
            return {...state, isSignedIn:false , userId:null , userName:null,userImg:null}
        default:
            return state;
    }
};