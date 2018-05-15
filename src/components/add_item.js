import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { addToDoItem } from '../actions';

class AddItem extends Component {
    async handleAddItem(values){

         await this.props.addToDoItem(values);
        //this returns a promise 

        this.props.history.push('/');
    }

    // buidling out the inputs dyamically 
    // Functional component 
    // props should be set in this method
    // destrucutring the object in the parameter list
    renderInputs({label, input, meta: {touched, error}}) {
        return(
            <div>
                <label>{label}</label>
                <input {...input} type="text" autoComplete="off"/>
                <p className="red-text text-darken-2">{touched && error}</p>
            </div>
        )
    }
    render() {
         const { handleSubmit } = this.props

        return (
            <div>
                <h1 className="center">Add To Do Item</h1>
                    <div className="row right-align">
                        <Link className="btn blue-grey" to="/">View List</Link>
                    </div>
                    <div className="row">
                        <form onSubmit={ handleSubmit(this.handleAddItem.bind(this))} className="col s12 m8 offset-m2">

                                <Field name='title' label="Item Title" component={this.renderInputs} />
                                <Field name='details' label="Item details" component={this.renderInputs} />

                            <button className="btn grey">Add Item</button>
                        </form>
                    </div>
            </div>
        );
    }
}

//pulling the two items in the feild 
//errors much match name from field
// runs in real time 
// have to tell the redux form of the errors
// in the params passing in the object
function validate({ title, details }){
    const errors = {};

    if(!title) errors.title ='please enter a title';
    if(!details) errors.details = 'give details about your item';
    
    return errors;
}

AddItem = reduxForm( {
    form: 'add_item',
    validate
})(AddItem);

export default connect(null, { addToDoItem })(AddItem);