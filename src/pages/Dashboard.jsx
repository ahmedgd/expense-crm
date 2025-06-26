import React, { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expense) => {
    if (editingIndex !== null) {
      const updated = [...expenses];
      updated[editingIndex] = expense;
      setExpenses(updated);
      setEditingIndex(null);
    } else {
      setExpenses([...expenses, expense]);
    }
  };

  return (
    <>
    
  <Navbar />
  <h2 className="mb-4 text-center text-primary">Expense Tracker CRM</h2>

      <h2 className="mb-4 text-center text-primary">Expense Tracker CRM</h2>
      <ExpenseForm
        onAdd={handleAddExpense}
        initialData={editingIndex !== null ? expenses[editingIndex] : null}
      />
      <hr />
      <ExpenseTable
        data={expenses}
        onDelete={(idx) => {
          if (window.confirm("Delete this entry?")) {
            setExpenses(expenses.filter((_, i) => i !== idx));
          }
        }}
        onEdit={(idx) => setEditingIndex(idx)}
      />
    </>
  );
};

export default Dashboard;
