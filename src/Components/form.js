import React, { Component } from 'react';

import { toast } from 'react-toastify';

import { Grid, Row, Col } from 'react-bootstrap';

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
        //handle onchange event for each field
        let state = this.state;
        state[attr] = e.target.value;
        this.setState(state);
    }

    addItem = () => {
        //addItem calls the handler passed in as a prop to the component
        toast.success('Added the item', toastOptions);
        this.props.addItem(
            this.state.name,
            this.state.price,
            this.state.category
        );

        this.setState({
            name: '',
            price: '',
            category: ''
        })
    }
    
    render() {
        return (
            <Grid>
                <Row className='show-grid'>
                    <Col xs={12} md={12}>
                        <div style={{color:'red',fontStyle:'italics'}}>* indicates required fields</div>
                    </Col>
                </Row>

                <Row className='show-grid'>
                    <Col xs={12} md={3}>
                        Name * : <input type='text' onChange={(e) => this.handleChange('name', e)} value={this.state.name}/>
                    </Col>
                    <Col xs={12} md={3}>
                        Price * : <input type='number' onChange={(e) => this.handleChange('price', e)} value={this.state.price}/>
                    </Col>
                    <Col xs={12} md={3}>
                        Category * : 
                        <select style={{marginLeft:'5px'}} onChange={(e) => this.handleChange('category', e)} value={this.state.category}>
                            <option value=''>Please select a category</option>
                            <option value='Electronics'>Electronics</option>
                            <option value='Kitchen'>Kitchen</option>
                            <option value='Clothing'>Clothing</option>
                        </select>
                    </Col>
                    <Col xs={12} md={3}>
                        {
                            //all fields are required before the button is shown
                            //prevents empty values
                            this.state.name !== '' &&
                            this.state.price !== '' &&
                            this.state.category !== '' &&
                            <input type='button' onClick={this.addItem.bind(this)} value='Add Item' />
                        }
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Form