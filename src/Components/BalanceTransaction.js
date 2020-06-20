import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const BalanceTransaction = () => {
    const { transactions } = useContext(GlobalContext)
    const amount = transactions.map(transaction => (
        transaction.transactionAmount
    ))
    const total = amount.reduce((accumulator, item) => (accumulator+=item),0).toFixed(2)
    return (
        <div>
            <h4>Current Balance is</h4>
            <h2>${total}</h2>
        </div>
    )
}