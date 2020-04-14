import React from 'react';
import Spinner from './Spinner';
import {connect} from 'react-redux';
import  {signIn,signOut} from '../actions';

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'1069755705614-edlignbank5b6ev4bqtf8gp93n6uqkkb.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    signOutGoogle =() => {
        this.auth.signOut();
    }

    signInGoogle =() => {
        this.auth.signIn();
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    renderAuthBotton(){
        const {isSignedIn} = this.props
        if(isSignedIn === null){
            return <Spinner/>;
        }
        else if(isSignedIn){
            return ( 
                <button onClick={this.signOutGoogle} className="ui red gogle button">
                      התנתק  
                    <i className="google icon" />
                </button>
            )
        }
        else{
            return(
                <button onClick={this.signInGoogle} className="ui green gogle button">
                    הרשם עם גוגל
                    <i className="google icon" />
                </button>
                )
        }
    }

    render(){
        return (
            <div>{this.renderAuthBotton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn:state.auth.isSignedIn};
}

export default connect(mapStateToProps,
     {signIn,signOut})
     (GoogleAuth);


     //auth.currentUser.get().getBasicProfile().getName()
     //auth.currentUser.get().getBasicProfile().getImageUrl()