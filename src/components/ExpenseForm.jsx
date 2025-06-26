import React, { useState, useEffect } from "react";

const ExpenseForm = ({ onAdd, initialData }) => {
  const [form, setForm] = useState({
    date: "",
    category: "",
    description: "",
    amount: "",
    paymentMethod: "",
    color: "#000000",
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form); 
    setForm({
      date: "",
      category: "",
      description: "",
      amount: "",
      paymentMethod: "",
      color: "#000000",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="date"
            name="date"
            className="form-control"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            name="category"
            className="form-control"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            name="amount"
            className="form-control"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <select
            name="paymentMethod"
            className="form-select"
            value={form.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="Transfer">Transfer</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="color"
            name="color"
            className="form-control form-control-color"
            value={form.color}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-3 text-end">
        <button type="submit" className="btn btn-success">
          {initialData ? "Update" : "Add"} Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
