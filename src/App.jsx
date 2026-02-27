import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import ExpenseEdit from './components/ExpenseEdit'

const App = () => {

  const [expenses , setExpenses] = useState(()=>{
    try {
      const savedExpenses = localStorage.getItem("expenses");
      return (savedExpenses && savedExpenses !== "undefined") ? JSON.parse(savedExpenses) : [
        {id:1 , title: "Groceries" , amount: 200 , category: "food" , date: "2025-02-08"},
        {id:2 , title: "Bus ticket" , amount: 50 , category: "transport" , date: "2026-02-08"},
        {id:3 , title: "Movie ticket" , amount: 15 , category: "entertainment" , date: "2026-02-08"}
      ]
    } catch (error) {
      localStorage.removeItem("expenses");
      return [
        {id:1 , title: "Groceries" , amount: 200 , category: "food" , date: "2025-02-08"},
        {id:2 , title: "Bus ticket" , amount: 50 , category: "transport" , date: "2026-02-08"},
        {id:3 , title: "Movie ticket" , amount: 15 , category: "entertainment" , date: "2026-02-08"}
      ]
    }
  })

  useEffect(()=>{
    localStorage.setItem("expenses" , JSON.stringify(expenses))
  }, [expenses])



  const Router = import.meta.env.NODE === 'production' ? HashRouter : BrowserRouter;

  return (
    <Router >
      <Header />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<ExpenseList expenses={expenses} setExpenses={setExpenses} />} />
          <Route path='/form' element={<ExpenseForm setExpenses={setExpenses} />} />
          <Route path='/edit/:id' element={<ExpenseEdit setExpenses={setExpenses} expenses={expenses} />} />
          <Route path='*' element={<ExpenseList expenses={expenses} setExpenses={setExpenses} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App