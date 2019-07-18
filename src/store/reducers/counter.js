import * as actions from '../actions'

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.INCREMENT:
            return {
                ...state,
                counter: state.counter += 1
            };
        case actions.DECREMENT:
            return {
                ...state,
                counter: state.counter -= 1
            };
        case actions.ADD:
            return {
                ...state,
                counter: state.counter += action.val
            };
        case actions.SUBTRACT:
            return {
                ...state,
                counter: state.counter -= action.val
            };
    }
    return state;
};

export default counterReducer;