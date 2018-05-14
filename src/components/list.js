import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListData } from '../actions'

class List extends Component {
            // everything in connect able to be called by props
    componentDidMount() {
        this.props.getListData();
            //returns a promise, cannot do anythnig with it 
    }
    render() {
        const { listData } = this.props;

        const listItems = listData.map((item, index) => {
             // this item comes from the map item above // just a call back function
        return  <li className="collection-item" key={item._id}>{item.title}</li>
})
        return (
            <div>
               <ul className="collection">
                {listItems}
               </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
        return{
            listData: state.list.all
        }
}

export default connect(mapStateToProps, { getListData })(List);