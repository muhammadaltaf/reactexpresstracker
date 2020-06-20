import React from 'react';
import './App.css';

//import components
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BalanceTransaction } from './Components/BalanceTransaction';
import { AccountSummary } from './Components/AccountSummary';
import { TransactionSummary } from './Components/TransactionSummary'
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './context/GlobalState'
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <BalanceTransaction/>
        <AccountSummary/>
        <TransactionSummary/>
        <AddTransaction/>
      </div>
      <Footer/>
    </GlobalProvider>
  );
}

export default App;
