import React from 'react';
import Spinner from './Spinner';

class GoogleAuth extends React.Component{

    state = {isSignedIn:null};

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'1069755705614-edlignbank5b6ev4bqtf8gp93n6uqkkb.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()})
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

    onAuthChange = () => {
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }

    renderAuthBotton(){
        if(this.state.isSignedIn === null){
            return <Spinner/>;
        }
        else if(this.state.isSignedIn){
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
export default GoogleAuth;
