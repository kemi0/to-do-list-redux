import React from 'react';
import List from './list';
import AddItem from './add_item';
import SingleItem from './single_item';
import { Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

const App = () => (
    <div>
        <div className="container">
            <Route exact path="/" component={List}/>
            <Route  path="/add-item" component={AddItem}/>
            <Route  path="/item/:id" component={SingleItem}/>

        </div>
    </div>
);

export default App;
// : make a variable that contains information to the ID 
// : <- means were doiin something different 