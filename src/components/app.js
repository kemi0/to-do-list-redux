import React from 'react';
import List from './list';
import AddItem from './add_item';
import { Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

const App = () => (
    <div>
        <div className="container">
            <Route exact path="/" component={List}/>
            <Route  path="/add-item" component={AddItem}/>

        </div>
    </div>
);

export default App;
