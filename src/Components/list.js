import React, { Component } from 'react';

import Form from './form';
import Items from './items';

import filter from 'lodash/filter';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        }
    }

    addItem = (name, price, category) => {
        let thisItems = this.state.items;

        if (thisItems.hasOwnProperty(category)){
            thisItems[category].push({ 'name': name, 'price': price });
        }
        else{
            thisItems[category] = [{ 'name': name, 'price': price }];
        }
        this.setState({
            items: thisItems
        })
    }

    removeItem = (category, itemName) => {
                
    }

    render() {
        return (
            <div>
                <Form addItem={this.addItem.bind(this)}/>
                <br/>
                {
                    Object.keys(this.state.items).map((e) => { 
                        return (
                            <Items key={e} categoryName={e} categoryItems={this.state.items[e]}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default List