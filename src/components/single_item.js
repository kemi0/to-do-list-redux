import React, { Component } from 'react';

class SingleItem extends Component {
    // how to programatically get an ID

    componentDidMount() {
        // console log your props to see your object 
        console.log('single Props:', this.props);
    }

    render() {
        return (
            <div>
                <h1>SPAM MAIL</h1>
            </div>
        );
    }
}

export default SingleItem;