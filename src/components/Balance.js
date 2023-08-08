import React, { useContext } from 'react'
import IncomeExpense from './IncomeExpense'
import History from './History'
import NewTransaction from './NewTransaction'
import { GlobalContext } from '../context/GlobalState'

export default function Balance() {
  const {transactions}=useContext(GlobalContext);
  const amounts = transactions.map(transaction=>(transaction.amount));
  const total = amounts.reduce((acc,item)=>(acc +=item),0).toFixed(2);
  
  return (
    <div className='container'>
    <h4>Your Balance</h4>
    <h1 >${total}</h1>
    <IncomeExpense/>
    <History/>
    <NewTransaction/>
   
    </div>
  )
}
