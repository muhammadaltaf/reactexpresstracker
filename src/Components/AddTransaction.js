import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext)
    const [description, setDescription] = useState();
    const [transactionAmount, setTransactionAmount] = useState();

    const onSubmit = (e) => {
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 1000),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction)
    }

    return (
        <div>
            <h3>Add Transaction Information</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor='description'>Description</label>
                    <input  type="text" 
                            id='description' 
                            placeholder="Enter Details of description" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required>
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor='amount'>Enter Amount</label>
                    <input  type="number"
                            id="amount"
                            placeholder="Enter Amount"
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                            required
                    ></input>
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}