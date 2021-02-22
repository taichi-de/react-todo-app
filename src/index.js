import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// // 関数ベース
// const TodoApp = () => {
//   const [value, setValue] = useState("");
//   const [todoList, setTodoList] = useState([]);

//   const handleChange = e => {
//     const newValue = e.target.value;
//     setValue(newValue);
//   };

//   const add = () => {
//     const newTodo = [...todoList, value];
//     setTodoList(newTodo);
//     setValue("");
//   };

//   return (
//     <div>
//       <h1>TODO App</h1>
//       <div>
//         <input type="text" value={value} onChange={e => handleChange(e)} />
//         <ul>
//           {todoList.map((todo, i) => (
//             <li key={i}>{todo}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
//  };

 ReactDOM.render(
   <HelloWorld />,
   document.getElementById('root')
 );
