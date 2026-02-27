import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ExpenseForm = ({setExpenses}) => {





  const navigate = useNavigate()

  const [title , setTitle] = useState("");
  const [amount , setAmount] = useState("");
  const [category , setCategory] = useState("");
  const [date , setDate] = useState("");

  const handleAddExpense = (e)=>{
    e.preventDefault();

    const addExpense = {
      id: Date.now(),
      amount,
      title,
      category,
      date
    };

    setExpenses(prev=>[...prev, addExpense])

    alert("Expense added successfully")
    navigate("/")

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");

  }



  return (
    <div className='container'>
      <h2>➕ Add New Expense</h2>
      <form className='form' onSubmit={handleAddExpense}>
        <div className='data'>
          <label htmlFor="title">Title:</label>
          <input type="text" id='title' placeholder='e.g., Groceries, Gas...' value={title}  onChange={(e)=>setTitle(e.target.value)}  required  />
        </div>

        <div className='data'>
          <label htmlFor="amount">Amount ($):</label>
          <input type="number" id='amount' placeholder='0.00' min="0.01" step="0.01" value={amount} onChange={(e)=>setAmount(e.target.value)}  required />
        </div>
        <div className='data'>
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={(e)=>setCategory(e.target.value)} required>
            <option value="">Choose category</option>
            <option value="food">🍔 Food</option>
            <option value="transport">🚗 Transport</option>
            <option value="entertainment">🎬 Entertainment</option>
            <option value="health">🏥 Health</option>
            <option value="shopping">🛒 Shopping</option>
            <option value="utilities">💡 Utilities</option>
            <option value="other">📌 Other</option>
          </select>
        </div>

        <div className='data'>
          <label htmlFor="date">Date:</label>
          <input type="date" id='date' value={date} onChange={(e)=>setDate(e.target.value)} required />
        </div>

        <button className='btn btn-primary' type='submit' >Save Expense</button>
        <Link to="/" className='btn btn-danger'>Cancel</Link>
      </form>
    </div>
  )
}

export default ExpenseForm