import React, { Component } from 'react';

import { toast } from 'react-toastify';

const toastOptions = {
    autoClose: 2000,
    hideProgressBar: true,
    type: toast.TYPE.INFO,
    position: 'top-right'
}

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            price: '',
            category: ''
        }
    }

    handleChange = (attr, e) => {
        let state = this.state;
        state[attr] = e.target.value;
        this.setState(state);
    }

    addItem = () => {
        toast.success('Added the item', toastOptions);
        this.props.addItem(
            this.state.name,
            this.state.price,
            this.state.category
        );
    }
    
    render() {
        return (
            <div className='form'>
                Name: <input type='text' onChange={(e) => this.handleChange('name', e)}/>
                Price: <input type='number' onChange={(e) => this.handleChange('price', e)}/>
                Category: <input type='text' onChange={(e) => this.handleChange('category', e)}/>
                {
                    this.state.name !== '' &&
                    this.state.price !== '' &&
                    this.state.category !== '' &&
                    <input type='button' onClick={this.addItem.bind(this)} value='Add Item' />
                }
            </div>
        )
    }
}

export default Form