import { useState } from "react";
const List = ({ todos, deleteTodo, editTodo }) => {
  const [edited, setEdited] = useState(null);

  return (
    <ul className="list-ul">
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>

          <div>
            {edited === todo.id && (
              <input
                type="text"
                defaultValue={todo.text}
                onBlur={(e) => {
                  editTodo(todo.id, e.target.value);
                  setEdited(null);
                }}
              />
             
            )}
            <button className="edit-btn" onClick= {(e) =>
              {setEdited(todo.id, e.target.value)}}>
              
              Edit
             </button>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
