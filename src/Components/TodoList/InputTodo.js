import { useState } from "react";

const InputTodo = ({ addTodo, todo  }) => {
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid]= useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === ""){
        setIsInvalid(false);
        return;
    } 
        if (todo) {
            editTodo();
          } else {
            addTodo(value);
          }
    setValue("");
    setIsInvalid(true);
  };
  const editTodo = () => {
    todo.text= value;
    addTodo(todo.id, value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
       className={`form-control ${isInvalid ? "" : "is-invalid"}`}
        type="text"
        value={value}
        onChange={(e) => {
            setValue(e.target.value)
            setIsInvalid(true);

        }}
      />
      <button className="add-btn" type="submit" >Add</button>
    </form>
  );
};

export default InputTodo;









