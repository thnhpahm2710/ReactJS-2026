import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./type";

const iniState = {
    count: 1
}

export const counterReducer = (state = iniState, action) => {
    console.log(state.count);
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                count: state.count + 1
            }
        case DECREMENT_COUNTER:
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}