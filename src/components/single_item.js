import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem } from '../actions';
import { Link } from 'react-router-dom';

class SingleItem extends Component {
    // how to programatically get an ID

    componentDidMount() {
        // console log your props to see your object 
      
        // can get the id inside match params id 
        // use this id number to mak a request to the server 

        //the key name from mapstatetoProps
        // state changes should be console.loged in the render method
        // any time the props changed the state always re renders so render will get called twice 
        this.props.getSingleItem(this.props.match.params.id);

        // display all avaiable information to the user using the JS date object to convert the time 
        // if its completed should be displayed different 
        // const time = new date (inset number ) through props 
        // be on the right page dummy / the checking of the title and details 
        // server will make the changes for the completed from true or false 
        // second btn shoudd delete 
        // setup delete btn should be like the add item 

        // your page should refresh on the same url 
        // keep that design in mind 
    }
    
    render() {
        // any input should reRender so all console logs should go here 
        // if you want to check you props from props get single Item 
        console.log('Single Props:', this.props);

        // deconstrucring the object/ using as expression
        const { title, details } = this.props.item


        return (
            <div>
                <h1>SPAM MAIL</h1>
                 {/* this is how you should use you a tags as link tags  */}
                <div className="row right-align">
                        <Link to='/' className="btn blue-grey"> View Full list </Link>
                </div>
                <h4>{title}</h4>
                <h3>{details}</h3>
            </div>
        );
    }
}
function mapStateToProps( state ){
    return {
        item: state.list.single
    }
}


export default connect(mapStateToProps, { getSingleItem })(SingleItem);
// the second item in mapstate to props returns an action creator which an object 