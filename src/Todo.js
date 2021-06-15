import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, listTodo } from './store/action/todo';
const Todo = (props) => {
  const [todoData, setTodoData] = useState('');
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);

  const handelChange = (e) => {
    setTodoData(e.target.value);
  };

  const saveTodo = () => {
    dispatch(addTodo({ id: 4, title: todoData }));
    setTodoData('');
  };

  useEffect(() => {
    dispatch(listTodo());
  }, []);
  return (
    <div className='container'>
      <h1>Add Todo</h1>

      <p>
        <input
          type='text'
          onChange={(e) => handelChange(e)}
          value={todoData}
          placeholder={'Add todo'}
        />
        <button onClick={() => saveTodo()}>Save</button>
      </p>
      <h1>List Todo</h1>
      <ul>
        {todoState &&
          todoState.list.map((todo, index) => {
            return <li key={index}>{todo.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default Todo;
