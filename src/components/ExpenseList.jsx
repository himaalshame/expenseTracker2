import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'


const ExpenseList = ({ expenses , setExpenses }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Filter logic: Filter original expenses based on selected category
    const filteredExpenses = selectedCategory === 'all' 
        ? expenses 
        : expenses.filter(item => item.category === selectedCategory);

    // Calculate total based on FILTERED expenses
    const totalAmount = filteredExpenses.reduce((acc , item)=>{
        return acc + Number(item.amount) 
    } , 0)


    const handleDelete = (id)=>{
        if(window.confirm("Are you want delete this expense")){
            const deleteExpenses = expenses.filter(item=>item.id !== id)
        setExpenses(deleteExpenses)
        }
        
    }


    const handleClearAll = ()=>{
        if(window.confirm("Are you want to clear all expenses?")){
            setExpenses([])
        }
    }

    return (
        <div className='container'>
            <div className="header-data">
                <h2>📊 Expenses List</h2>
                {expenses.length > 0 && (
                    <button className='btn btn-danger btn-sm' onClick={handleClearAll}>
                        🗑️ Clear All
                    </button>
                )}
            </div>
            
            <div className="filter-section mb-4">
                <select 
                    className="form-select" 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="all">All Categories</option>
                    <option value="food">🍔 Food</option>
                    <option value="transport">🚗 Transport</option>
                    <option value="entertainment">🎬 Entertainment</option>
                    <option value="health">🏥 Health</option>
                    <option value="shopping">🛒 Shopping</option>
                    <option value="utilities">💡 Utilities</option>
                    <option value="other">📌 Other</option>
                </select>
            </div>

            <div className='total' >Total: <strong>${totalAmount.toFixed(2)}</strong></div>

            {filteredExpenses.length === 0 ? (
                <div style={{textAlign: 'center', padding: '2rem', color: '#999'}}>
                    <p style={{fontSize: '1.2rem', marginBottom: '1rem'}}>
                        {expenses.length === 0 ? "No expenses yet" : "No expenses in this category"}
                    </p>
                    {expenses.length === 0 && <Link to='/form' className='btn btn-primary'>Add your first expense</Link>}
                </div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            filteredExpenses.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>${Number(item.amount).toFixed(2)}</td>
                                    <td><span style={{background: '#e7f3ff', padding: '0.3rem 0.8rem', borderRadius: '5px', fontSize: '0.9rem', color: '#333'}}>{item.category}</span></td>
                                    <td>{new Date(item.date).toLocaleDateString()}</td>
                                    <td>
                                        <Link  to={`/edit/${item.id}`}  className='btn btn-info'>Edit</Link>
                                        <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default ExpenseList