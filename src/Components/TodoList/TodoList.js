import { useState, useEffect } from "react";
import InputTodo from "./InputTodo";
import List from "./List";

const TodoList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    setList(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  const addTodo = (title) => {
    const newTodo = {
      id:Math.floor(Math.random()*new Date()),
      text: title,
      completed: false,
    };
    setList([...list, newTodo]);
  };


  const deleteTodo = (id) => {
    const newTodos = list.filter((todo) => todo.id !== id);
    setList(newTodos);
  };

  const editTodo = (id, title) => {
    const newTodos = [...list];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.text = title;
    setList(newTodos);
    
  };

  const clearAll = () => {
    setList([]);
  };

 
  return (
    <div className="todo col-6">
        <h1>Todo List</h1>
          <InputTodo addTodo={addTodo} />
      
      <List
        todos={list}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
      <button className="clear-btn" onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default TodoList;




































// import InputTodo from './InputTodo';
// import List from './List'
// import ListItem from './ListItem'

// const TodoList = () => {
//    let [list, setList]= useState([]) ;

//    const addList =(item)=>{
//     setList([...list, item])
//    };

//   return (
//     <div>
//         <InputTodo addList={addList} />
//         <List todolar={list}/>
//     </div>
//   )
// }

// export default TodoList