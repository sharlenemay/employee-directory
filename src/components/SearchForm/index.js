import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.employees array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="Employee">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search by name"
          id="employee"
        />
        <datalist id="employees">
          {props.employees.map(employee => (
            <option value={employee} key={employee} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
