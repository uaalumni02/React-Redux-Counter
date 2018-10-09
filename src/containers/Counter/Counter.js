import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterOutput from '../../components/CounterOutput/index';
import Button from '../../components/Button/index';

class Counter extends Component {
    state = { showCounter: false }
    render = () => {
        return (
            <div>
                <h1>Name is : {this.props.binLaden} </h1>
                {this.state.showCounter ? <CounterOutput cnt={this.props.counter} /> : null }
                <Button label="ADD" click={this.props.increment} />
                <Button label="SUBTRACT" click={this.props.decrement}/>
                <Button label="ADD 15" click={this.props.add15}/>
            </div>
        );
    } 

}

// So we have access to data in the store
const mapStateToProps = state => {
    return {
        counter: state.counter,
        binLaden: state.name
    }
}

// Store { counter } => props.counter 

// We need to update the store
const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: "INCREMENT" }),
        decrement: () => dispatch({ type: "DECREMENT" }),
        add15: () => dispatch({ type: "ADD_SOMETHING", value: 15}),
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);