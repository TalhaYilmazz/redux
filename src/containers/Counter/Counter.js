import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux'
import * as actions from '../../store/actions'

class Counter extends Component {
    state = {
        counter: 0,
        results: []
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.rslts.map(rslt => (
                        <li key={rslt.id} onClick={() => this.props.onDeleteResult(rslt.id)}>{rslt.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        ctr: state.ctr.counter,
        rslts: state.res.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        onIncrementCounter: () => dispatch({type: actions.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actions.DECREMENT}),
        onAddCounter: () => dispatch({type: actions.ADD, val: 5}),
        onSubtractCounter: () => dispatch({type: actions.SUBTRACT, val: 5}),
        onStoreResult: (result) => dispatch({type: actions.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actions.DELETE_RESULT, resultElId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);