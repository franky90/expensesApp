import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    startEditingHandler(false);
  };
  const stopEditingHandler = () => {
    setButtonState(false);
  };

  const [buttonState, setButtonState] = useState(false);

  let expenseForm = (
    <ExpenseForm
      onCancel={stopEditingHandler}
      onSaveExpenseData={saveExpenseDataHandler}
    />
  );

  const startEditingHandler = () => {
    setButtonState(true);
  };
  const addNewButton = (
    <button onClick={startEditingHandler}>Add new Expense</button>
  );

  return (
    <div className="new-expense">
      {buttonState ? expenseForm : addNewButton}
    </div>
  );
}

export default NewExpense;
