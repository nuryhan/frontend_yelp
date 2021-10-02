import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { RestaurantsContextProvider } from './contextAPI/RestaurantsContext';
import Home from './routes/Home';
import RestaurantDetail from './routes/RestaurantDetail';
import UpdatePage from './routes/UpdatePage';

const App = ()=> {
    return (
    <RestaurantsContextProvider>
    <div className="container"> 
        <Router>
            <Switch>
            <Route exact path = "/" component={Home} ></Route>
            <Route exact path = "/restaurants/:id/update" component={UpdatePage} ></Route>
            <Route exact path = "/restaurants/:id" component={RestaurantDetail} ></Route>
            </Switch>
        </Router>
    </div>
    </RestaurantsContextProvider>)
}

export default App;