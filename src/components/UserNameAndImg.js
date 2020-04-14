import React from 'react';
import {connect} from 'react-redux';

class UserNameAndImg extends React.Component{


    renderUserNameAndImg(){
        const {isSignedIn,userName,userImg} = this.props
        
        return (
            isSignedIn ?
            (
                <div className="item">
                    <img className="ui mini circular image" src={userImg}/>
                    <div className="middle aligned content">
                        <div className="header">{userName}</div>
                    </div>
                </div>) : null
        );
    }

    render(){
        return (
                <div>{this.renderUserNameAndImg()}</div>
                )
    }
    
}

const mapStateToProps = (state) => {
    return {
            isSignedIn:state.auth.isSignedIn,
            userName:state.auth.userName,
            userImg:state.auth.userImg
            };
    }

export default connect(mapStateToProps)(UserNameAndImg);