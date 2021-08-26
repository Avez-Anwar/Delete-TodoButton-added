import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') {
      return;
    }
    const newText = {
      text: text,
      id: Date.now()
    };
    setItems(items.concat(newText));
    setText('');
  };

  const removeTodo = i => {
    let todos = items.slice();
    todos.splice(i, 1);
    setItems(todos);
  };

  console.log(items);

  return (
    <div>
      <label>Add To Do ???</label>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add #</button>
      </form>
      <Todo items={items} removeTodo={removeTodo} />
    </div>
  );
}

export default App;

function Todo(props) {
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <li onClick={() => props.removeTodo(item, index)} key={index}>
            {item.text}{' '}
            <button onClick={() => props.removeTodo(item, index)}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
}
