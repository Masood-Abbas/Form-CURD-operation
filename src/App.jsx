import { useState } from "react";
import "./App.css";

function App() {
  // states
  const [inputValue, setInputValue] = useState({
    name: "",
    class: "",
  });

  const [data, setData] = useState([]);
  const [editId, setUserEdit] = useState(null);
  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };
  // form is submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      const updateUser = data.map((curElem) =>
        curElem.id === editId ? { ...inputValue, id: curElem.id } : curElem
      );
      setData(updateUser);
      setUserEdit(null);
    } else {
      let info = { ...inputValue, id: new Date().getTime().toString() };
      setData([...data, info]);
    }

    setInputValue({ name: "", class: "" });
  };
  // handle delete functionality
  const handleDelete = (id) => {
    setData(data.filter((curElem) => curElem.id !== id));
  };
  // handle Edit functionality
  const handleEdit = (id) => {
    const userEdit = data.find((curElem) => curElem.id === id);
    setInputValue(userEdit);
    setUserEdit(id);
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <input
        type="text"
        name="name"
        value={inputValue.name}
        placeholder="enter Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="class"
        placeholder="enter class"
        value={inputValue.class}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>{editId?"Update":"Submit"}</button>

      <ul>
        {data.map((curElem) => {
          return (
            <li key={curElem.id}>
              {curElem.name} - {curElem.class}
              <div>
                <button
                  className="btn"
                  onClick={() => handleDelete(curElem.id)}
                >
                  Delete
                </button>
                <button onClick={() => handleEdit(curElem.id)}>Edit</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
