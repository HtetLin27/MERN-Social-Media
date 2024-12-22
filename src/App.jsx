import { useState } from "react";
import Item from "./Item";
import List from "./List";
import From from "./From";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([
    { id: 1, content: "Hello, World", name: "Alice" },
    { id: 2, content: "React is fun", name: "Bob" },
    { id: 3, content: "Yay, interesting", name: "Chris" },
  ]);

  const remove = (id) => {
    console.log(id);
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, content, name }]);
  };
  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Yaycha
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            width: 32,
            height: 32,
            borderRadius: 50,
            border: "0 none",
            background: showForm ? "#dc3545" : "#0d6efd",
            color: "white",
          }}
        >
          {showForm ? "x" : "+"}
        </button>
      </h1>
      {showForm && <From add={add} />}
      <List>
        {data.map((item) => (
          <Item key={item.id} item={item} remove={remove} />
        ))}
      </List>
    </div>
  );
}
