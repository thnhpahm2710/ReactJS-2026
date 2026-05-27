import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./type";

const incrementCounter = () => {
    return{
        type: INCREMENT_COUNTER
    }
}

const decrementCounter = () => {
    return{
        type: DECREMENT_COUNTER
    }
}

export { incrementCounter, decrementCounter };