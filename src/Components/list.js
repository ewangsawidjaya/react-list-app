import React, { Component } from 'react';

import Form from './form';
import Items from './items';

import cloneDeep from 'lodash/cloneDeep';
import remove from 'lodash/remove';

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
        let thisItems = this.state.items;
        remove(thisItems[category], {
            name: itemName
        });

        this.setState({
            items: thisItems
        })

        console.log(this.state);
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
            </div>
        )
    }
}

export default List