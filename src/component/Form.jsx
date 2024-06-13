import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState({ name: "", class: "" });
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isFormView, setIsFormView] = useState(true); // State to toggle views

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      const updatedData = data.map((item) =>
        item.id === editId ? { ...inputValue, id: item.id } : item
      );
      setData(updatedData);
      setEditId(null);
    } else {
      const newItem = { ...inputValue, id: new Date().getTime().toString() };
      setData([...data, newItem]);
    }
    setInputValue({ name: "", class: "" });
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setInputValue(itemToEdit);
    setEditId(id);
    setIsFormView(true); // Switch to form view when editing
  };

  return (
    <div className="app">
      <nav>
        <button onClick={() => setIsFormView(true)}>Form</button>
        <button onClick={() => setIsFormView(false)}>Table</button>
      </nav>
      {isFormView ? (
        <div>
          <h1>TODO LIST - Form</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={inputValue.name}
              placeholder="Enter Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="class"
              placeholder="Enter Class"
              value={inputValue.class}
              onChange={handleChange}
            />
            <button type="submit">{editId ? "Update" : "Submit"}</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>TODO LIST - Table</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.class}</td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
