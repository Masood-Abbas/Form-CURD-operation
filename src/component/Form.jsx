import React from 'react';

const Form = ({ formValues, handleData, handleSubmit, editId }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          autoComplete="off"
          value={formValues.name}
          onChange={handleData}
          name="name"
          required
          placeholder="Full Name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          autoComplete="off"
          value={formValues.email}
          onChange={handleData}
          name="email"
          required
          placeholder="example@gmail.com"
        />
      </div>
      <div>
        <label htmlFor="phoneNo">Phone No</label>
        <input
          type="tel"
          autoComplete="off"
          value={formValues.phoneNo}
          onChange={handleData}
          name="phoneNo"
          required
          placeholder="030*********"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          autoComplete="off"
          value={formValues.password}
          onChange={handleData}
          name="password"
          required
          placeholder="Password"
        />
      </div>
      <button type="submit">{editId !== null ? "Update" : "Registration"}</button>
    </form>
  );
};

export default Form;
