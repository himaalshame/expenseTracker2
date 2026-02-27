import React from 'react'
import { Link, Navigate } from 'react-router-dom'


const ExpenseList = ({ expenses , setExpenses }) => {


    // active totalAmount
    const totalAmount = expenses.reduce((acc , item)=>{
        return acc + Number(item.amount) 
    } , 0)


    const handleDelete = (id)=>{
        if(window.confirm("Are you want delete this expense")){
            const deleteExpenses = expenses.filter(item=>item.id !== id)
        setExpenses(deleteExpenses)
        }
        
    }



    return (
        <div className='container'>
            <div className="header-data">
                <h2>📊 Expenses List</h2>
            </div>
            <div className='total' >Total Expenses: <strong>${totalAmount.toFixed(2)}</strong></div>

            {expenses.length === 0 ? (
                <div style={{textAlign: 'center', padding: '2rem', color: '#999'}}>
                    <p style={{fontSize: '1.2rem', marginBottom: '1rem'}}>No expenses yet</p>
                    <Link to='/form' className='btn btn-primary'>Add your first expense</Link>
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
                            expenses.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>${Number(item.amount).toFixed(2)}</td>
                                    <td><span style={{background: '#e7f3ff', padding: '0.3rem 0.8rem', borderRadius: '5px', fontSize: '0.9rem'}}>{item.category}</span></td>
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