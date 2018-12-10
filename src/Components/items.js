import React, { Component } from 'react';

import { toast } from 'react-toastify';

const toastOptions = {
    autoClose: 2000,
    hideProgressBar: true,
    position: 'top-right'
}

class Items extends Component {
    removeItem = (categoryName, itemName, itemPrice) => {
        //removeItem calls the handler passed in as a prop to component
        this.props.removeItem(categoryName, itemName, itemPrice);
        toast.success('Removed the item', toastOptions);
    }
    
    render() {
        let categoryTotal = 0;

        return (
            
                <tbody>
                <tr>
                    <td>Category: {this.props.categoryName}</td>
                    <td></td>
                    <td></td>
                </tr>
                {
                    this.props.categoryItems.map((e) => { 
                        categoryTotal += parseFloat(e.price);
                        return (
                        <tr key={this.props.categoryName + '_' + e.name}>
                            <td>{e.name}</td>
                            <td>${e.price}</td>
                            <td><input type='button' value='X' onClick={() => this.removeItem(this.props.categoryName, e.name, e.price)}/></td>
                        </tr>
                        );
                    })
                }
                <tr>
                    <td>Total</td>
                    <td>${categoryTotal}</td>
                    <td></td>
                </tr>
                </tbody>
            
        )
    }
}

export default Items