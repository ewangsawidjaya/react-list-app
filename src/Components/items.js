import React, { Component } from 'react';

import { toast } from 'react-toastify';

const toastOptions = {
    autoClose: 2000,
    hideProgressBar: true,
    position: 'top-right'
}

class Items extends Component {
    removeItem = (categoryName, itemName) => {
        this.props.removeItem(categoryName, itemName);
        toast.success('Removed the item', toastOptions);
    }
    
    render() {
        let categoryTotal = 0;

        return (
            <div className='rTable'>
                <div className='rTableRow'>
                    <div className='rTableCell'>Category: {this.props.categoryName}</div>
                    <div className='rTableCell'></div>
                    <div className='rTableCell'></div>
                </div>
                {
                    this.props.categoryItems.map((e) => { 
                        categoryTotal += parseFloat(e.price);
                        return (
                        <div className='rTableRow' key={this.props.categoryName + '_' + e.name}>
                            <div className='rTableCell'>{e.name}</div>
                            <div className='rTableCell'>${e.price}</div>
                            <div className='rTableCell'><input type='button' value='X' onClick={() => this.removeItem(this.props.categoryName, e.name)}/></div>
                        </div>
                        );
                    })
                }
                <div className='rTableRow'>
                    <div className='rTableCell' style={{textAlign:'right'}}>Total</div>
                    <div className='rTableCell'>${categoryTotal}</div>
                    <div className='rTableCell'></div>
                </div>
            </div>
        )
    }
}

export default Items