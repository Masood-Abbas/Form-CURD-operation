import React, { useState } from 'react';
import Form from './component/Form';
import Table from './component/Table';

const App = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      const updateUser = data.map((curElem) =>
        curElem.id === editId ? { ...formValues, id: curElem.id } : curElem
      );
      setData(updateUser);
      setEditId(null);
    } else {
      const user = { ...formValues, id: new Date().getTime().toString() };
      setData([...data, user]);
    }
    setFormValues({ name: "", email: "", phoneNo: "", password: "" });
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const userEdit = data.find((user) => user.id === id);
    setFormValues(userEdit);
    setEditId(id);
  };

  return (
    <>
      <h1>Registration Form</h1>
      <Form
        formValues={formValues}
        handleData={handleData}
        handleSubmit={handleSubmit}
        editId={editId}
      />
      <Table data={data} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>
  );
};

export default App;
