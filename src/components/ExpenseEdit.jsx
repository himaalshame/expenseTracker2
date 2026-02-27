import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const ExpenseEdit = ({ expenses, setExpenses }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const expense = expenses.find(item => item.id === Number(id));
    if (expense) {
      setTitle(expense.title);
      setAmount(expense.amount);
      setCategory(expense.category);
      setDate(new Date(expense.date).toISOString().split("T")[0]);
    }
  }, [id, expenses]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (window.confirm("Are you sure you want to update this expense?")) {
      const updateExpense = {
        id: Number(id),
        title,
        amount,
        category,
        date
      };

      setExpenses(prev => prev.map(item => item.id === Number(id) ? updateExpense : item));
      navigate("/");
    }
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel without saving?")) {
      navigate("/");
    }
  };

  return (
    <div className='container'>
      <h2>✏️ Edit Expense</h2>
      <form className='form' onSubmit={handleUpdate}>
        <div className='data'>
          <label htmlFor="title">Title:</label>
          <input type="text" id='title' value={title} onChange={e => setTitle(e.target.value)} required />
        </div>

        <div className='data'>
          <label htmlFor="amount">Amount ($):</label>
          <input type="number" id='amount' min="0.01" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} required />
        </div>

        <div className='data'>
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={e => setCategory(e.target.value)} required>
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
          <input type="date" id='date' value={date} onChange={e => setDate(e.target.value)} required />
        </div>

        <button className='btn btn-primary' type='submit'>Save Changes</button>
        <button className='btn btn-danger' type='button' onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default ExpenseEdit;