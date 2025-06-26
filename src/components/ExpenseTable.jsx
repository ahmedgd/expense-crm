import React from "react";

const ExpenseTable = ({ data = [], onDelete, onEdit }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered align-middle text-center">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-muted">
                No expenses added.
              </td>
            </tr>
          ) : (
            data.map((exp, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{exp.date}</td>
                <td>{exp.category}</td>
                <td>{exp.description}</td>
                <td>${exp.amount}</td>
                <td>{exp.paymentMethod}</td>
                <td>
                  <span
                    style={{
                      backgroundColor: exp.color,
                      padding: "5px 15px",
                      borderRadius: "4px",
                      display: "inline-block"
                    }}
                  ></span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => onEdit(idx)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete(idx)}
                  >
                     Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
