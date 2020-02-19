import { createStore } from 'redux'

const initialState = {
    todoFilter: 'all'
}

const reducer = (
    state = initialState,
    action
) => {
    if (action.type === 'TODO_FILTER_CHANGE') {
        return { todoFilter: action.payload.filter }
    }

    return state
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
