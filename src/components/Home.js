import React from 'react';
import {Field , reduxForm,SubmissionError, getFormSyncWarnings } from 'redux-form';

class Home extends React.Component{

    renderError=({error,touched})=>{
        if(error && touched){
        return(      
            <div 
                className="header" 
                style={{color:'#e61e1e' , fontSize:18 , fontStyle:'oblique' , fontWeight: 700 , margin:5}}>
                {error}
            </div>
        );
        }
    }

    renderInput=({input,placeholder,type,meta})=>{
        const className = `field ${meta.error && meta.touched ? 'error': ''}`

        console.log(meta)
        return (
        <div className={className} style={{marginTop:15 , fontSize:19}}>
            <div></div>
            {this.renderError(meta)}
            <input {...input}
            placeholder={placeholder}
            type={type}
            />
        </div>
        )
    }

    onSubmit = (formValues) =>{
        //this.props.onSubmit(formValues);
        //console.log(formValues);
    }

    render(){
        return (
            
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" dir="rtl" >
                    <Field name="outputDescription" component={this.renderInput} placeholder="על מה הוצאת?" type="text"/>
                    <Field name="outputAmount"  component={this.renderInput} placeholder="סכום"  type="number"/>
                    <div style={{alignItems:"center" , justifyContent:"center" , display:"flex"}}>
                        <button className="ui large grey button" style={{width:300 , height:50}}>הכנס הוצאה</button>
                    </div>
                </form>
                );
    }
    
}


const validate = (formValues) => {
    const errors ={};
    
    if(!formValues.outputDescription) {
        errors.outputDescription ='אנא הכנס תיאור';
    }

    if(!formValues.outputAmount){
        errors.outputAmount ='אנא הכנס סכום';
    }

    return errors;
}

export default reduxForm({
    form:'Home',
    validate
})(Home);