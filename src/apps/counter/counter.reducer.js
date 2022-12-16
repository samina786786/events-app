import { DECREMENT_ACTION, INCREMENT_ACTION } from "./counter.actions";

export function counterReducers(currentState = 500, action) {
    const payload = action.payload;
    const type = action.type;
    console.log(":: conterReducers ::" , currentState, action)

    if(type === INCREMENT_ACTION.type) {
        return currentState + 10;
    }

    if(type === DECREMENT_ACTION.type) {
        return currentState - 20;
    }

    return currentState;

}