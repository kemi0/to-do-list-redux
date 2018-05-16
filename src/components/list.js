import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getListData } from '../actions';

class List extends Component {
            // everything in connect able to be called by props
    componentDidMount() {
        this.props.getListData();
            //returns a promise, cannot do anythnig with it 
    }
    render() {
        const { listData } = this.props;

        // setTimeout()
        //     if(!listData.length){
        //         return <h1>Loading...</h1>
        //     }
                
            
        // }
        
        
        const listItems = listData.map((item, index) => {
             // this item comes from the map item above // just a call back function
            return (
                <li className="collection-item" key={item._id}>
               <Link to={`/item/${item._id}`}>{item.title} </Link> 
                </li>
            ) 
        });

        return (
            <div>
                <h1 className="center"> To-Do-List</h1>
                     <div className="row right_align">
                         <Link className="btn blue-grey" to="/add-item">Add Item</Link>
                     </div>
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