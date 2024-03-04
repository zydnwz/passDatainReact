import React from 'react';
import ExpenseItems from './ExpenseItems';

const ParentComponent = () => {
    const expenses = [
        { id: 1, amount: 50, description: 'Food', location: 'Grocery Store' },
        { id: 2, amount: 100, description: 'Transportation', location: 'Gas Station' },
        { id: 3, amount: 200, description: 'Utilities', location: 'Electric Company' },
        { id: 4, amount: 75, description: 'Entertainment', location: 'Movie Theater' }
    ];

    return (
        <div>
            {expenses.map((expense) => (
                <ExpenseItems key={expense.id} expense={expense} />
            ))}
        </div>
    );
}

export default ParentComponent;
