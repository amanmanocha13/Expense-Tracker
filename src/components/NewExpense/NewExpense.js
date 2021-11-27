import { useState } from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const formDisplayHandler = (result, event) => {
    setShowForm(result);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    enteredExpenseData.id = Math.ceil(Math.random() * 1000).toString();
    props.onAddExpense(enteredExpenseData);
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          onCancel={formDisplayHandler.bind(this, false)}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
      {!showForm && (
        <button type="button" onClick={formDisplayHandler.bind(this, true)}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
