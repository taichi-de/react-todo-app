import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 関数ベース
const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const add = () => {
    const newTodo = { id: todoList.length, content: value };
    const newTodoList = [...todoList, value];
    setTodoList(newTodoList);
    setValue("");
  };

  const handleDelete = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h1>TODO App</h1>
      <div>
        <AddTodo value={value} onChange={handleChange} add={add} />
        <ul>
          {todoList.map(todo => (
            <TodoElement key={todo.id} content={todo.content} />
          ))}
        </ul>
      </div>
    </div>
  );
};


const AddTodo = props => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange} />
      <button onClick={props.add}>追加</button>
    </div>
  );
};

const TodoElement = props => {
  return(
    <li>
      {props.content}
      <button onClick={props.onDelete}>Delete</button>
    </li>
  );
};

 ReactDOM.render(
  <div>
    <h2>reactチュートリアルへようこそ</h2>
    <p>
      noteをお買い上げありがとうございます！ <br />
      いよいよコードの記述に入るので頑張っていきましょう。 <br />
      右上のforkをクリックしてから始めてください！
    </p>
  </div>,
   document.getElementById('root')
 );
