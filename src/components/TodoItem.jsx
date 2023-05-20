import { useRef } from 'react';

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li key={item.id} className="card">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button onClick={() => changeFocus()}>MAJ</button>
        <button onClick={() => completeTodo(item.id)}>Effectuer</button>
        <button onClick={() => removeTodo(item.id)}>Supprimer</button>
      </div>
      {item.completed && <span className="completed">Ok</span>}
    </li>
  );
};

export default TodoItem;
