import React from "react";
import "../App.css";
import { IoMdClose } from "react-icons/io";

const Form = ({ handleOnChange, handleSubmit, handleClose, rest }) => {
  return (
    <div className="addContainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleClose}>
          <IoMdClose />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={handleOnChange}
            value={rest.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your Email"
            onChange={handleOnChange}
            value={rest.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile:
          </label>
          <input
            type="number"
            className="form-control"
            id="mobile"
            name="mobile"
            placeholder="Enter your number"
            onChange={handleOnChange}
            value={rest.mobile}
          />
        </div>

        <button className="btn btn-secondary fw-bold">Submit</button>
      </form>
    </div>
  );
};

export default Form;
