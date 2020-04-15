import React from 'react';
import {Router, Route,Switch} from 'react-router-dom';
import Home from './Home'
import Balance from './Balance'
import History from './History'
import AddIncome from './AddIncome'
import ChangeBalance from './ChangeBalance'
import Header from './Header';
import history from '../history';

const App = () => {
    return <div>
                <Router history={history}>
                    <Header/>
                    <div>
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
                </Router>    
          </div>
}

export default App;