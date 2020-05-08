import React from 'react';
import {Router, Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './Home'
import Balance from './Balance'
import History from './History'
import AddIncome from './AddIncome'
import ChangeBalance from './ChangeBalance'
import Header from './Header';
import DatePickerComp from './DatePickerComp';
import history from '../history';

class App extends React.Component {
    render(){
        const {isSignedIn} = this.props;
    return (<div className="ui container">
                <Router history={history}>
                    <Header/>
                    {isSignedIn ? (
                    <div>
                    <DatePickerComp/>
                        <div>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/Balance" exact component={Balance}/>
                                <Route path="/History" exact component={History}/>
                                <Route path="/AddIncome" exact component={AddIncome}/>
                                <Route path="ChangeBalance" exact component={ChangeBalance}/>
                            </Switch>
                            </div>
                        </div>
                    ) : null}
                </Router>    
          </div>)
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn:state.auth.isSignedIn};
}

export default connect(mapStateToProps)(App);