import React from 'react';
import './ExpenseDate.css'; 

const ExpenseItems = ({ expense }) => {
    const { amount, description, location } = expense; 

    return (
        <div className="expense">
            <div className="expense-amount">Amount: {amount}</div>
            <div className="expense-description">Description: {description}</div>
            <div className="expense-location">Location: {location}</div>
        </div>
    );
}

export default ExpenseItems;
