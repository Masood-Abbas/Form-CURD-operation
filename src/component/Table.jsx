import React from "react";

const Table = ({ data, handleDelete, handleEdit }) => {
  return (
    <div>
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((curElem) => (
            <tr key={curElem.id}>
              <td>{curElem.name}</td>
              <td>{curElem.email}</td>
              <td>{curElem.phoneNo}</td>
              <td>{curElem.password}</td>
              <td>
                <button onClick={() => handleDelete(curElem.id)}>Delete</button>
                <button className="btn" onClick={() => handleEdit(curElem.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
