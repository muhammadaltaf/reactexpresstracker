import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
//initial global state
const initialState = {
    transactions: []
}

//creating context to maintain global state.
export const GlobalContext = createContext(initialState);

//create global provider so that our state is usable for children
export const GlobalProvider = ({children})=> {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Action for deleting transaction
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>       
    )
}