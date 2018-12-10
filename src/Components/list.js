import React, { Component } from 'react';

import Form from './form';
import Items from './items';

import remove from 'lodash/remove';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {},
            total: 0
        }
    }

    addItem = (name, price, category) => {   
        let total = this.state.total;
        //copy items locally to alter
        let thisItems = this.state.items;
        //check if category exists in items
        //if yes then add new item to the array of objects
        //if not then create new array with object {name,price}
        if (thisItems.hasOwnProperty(category)){
            thisItems[category].push({ 'name': name, 'price': price });
        }
        else{
            thisItems[category] = [{ 'name': name, 'price': price }];
        }
        total += parseFloat(price);
        this.setState({
            items: thisItems,
            total: total
        })
    }

    removeItem = (category, itemName, itemPrice) => {
        let total = this.state.total;
        //copy state items locally to alter
        let thisItems = this.state.items;
        remove(thisItems[category], {
            name: itemName
        });

        //check if the category has items in it
        //if no items, then remove category
        if (thisItems[category].length === 0){
            delete thisItems[category];
        }
        total -= parseFloat(itemPrice);

        this.setState({
            items: thisItems,
            total: total
        })

    }

    render() {
        return (
            <div>
                <Form addItem={this.addItem.bind(this)}/>
                <br/>
                {
                    Object.keys(this.state.items).map((e) => { 
                        return (
                            <Items key={e} categoryName={e} categoryItems={this.state.items[e]} removeItem={this.removeItem.bind(this)}/>
                        )
                    })
                }
                {
                    this.state.total > 0 ? <div>Total: ${this.state.total}</div> : ''
                }
            </div>
        )
    }
}

export default List