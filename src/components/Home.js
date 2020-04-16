import React from 'react';
import {Field , reduxForm } from 'redux-form';

class Home extends React.Component{
    renderInput({input , placeholder,type}){
        return (
        <div className="field">
            <div></div>
            <input {...input} 
            placeholder={placeholder}
            type={type}
            />
        </div>
        )
    }

    onSubmit(formVlaues){
        
    }

    render(){
        return (
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form" dir="rtl">
                    <div className="ui justified container">
                    <Field name="outputDescription" component={this.renderInput} placeholder="על מה הוצאת?" type="text"/>
                    <Field name="outputAmount"  component={this.renderInput} placeholder="סכום"  type="number"/>
                    <button className="ui button primary">הכנס הוצאה</button>
                    </div>
                </form>
                );
    }
    
}

export default reduxForm({
    form:'Home'
})(Home);