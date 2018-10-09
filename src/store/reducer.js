const initialState = {
    counter: 0,
    name: "Olawale",
}

const reducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1,
        }
    }
    if (action.type === "DECREMENT") {
        return {
            counter: state.counter - 1,
        }
    }
    if (action.type === "ADD_SOMETHING") {
        return {
            counter: state.counter + action.value,
        }
    }
    return state;
}

export default reducer;