import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';

//action name constants
const init = 'init';
const increment = 'increment';
const decrement = 'decrement';
const incrementByAmount = 'incrementByAmount'

//store
const store = createStore(reducer, applyMiddleware(thunk, logger.default));

//Combined reducers 
//use when you want to use use more than one reducer in a project 

// combinedReducers({
//     account:accountReducer,
//     bonus:bonusReducer
// })

const history = [];

//reducer
function reducer(state = { amount: 350 }, action) {

    switch (action.type) {
        case init:
            return { amount: action.payload + 2 };
        case increment:
            //immutablity
            return { amount: state.amount + 1 }
        // Do not directly change the state, make a copy then change
        case decrement:
            return { amount: state.amount - 1 }
        case incrementByAmount:
            return { amount: state.amount + action.payload }
        default:
            return state;
    }
}

//global state
//subscribe function run automatically on every state change 

// store.subscribe(()=>{
//     history.push(store.getState());
//     console.log(history);
// })


//Action creators
function getUser(id) {
    return async (dispatch, getState) => {
        const { data } = await axios.get(`http://localhost:3000/account/${id}`);
        dispatch(initUser(data.amount));
    }
}

function initUser(value) {
    return { type: init, payload: value };
}

function incrementFunction() {
    return { type: increment };
}

function decrementFunction() {
    return { type: decrement };
}

function incrementByAmountFunction(value) {
    return { type: incrementByAmount, payload: value };
}

setInterval(() => {
    store.dispatch(getUser(1))
}, 2000)



