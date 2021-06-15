export const addTodo = (payload) => ({ type: 'ADD_TODO', payload: payload });

export const listTodo = () => (dispatch) => {
  fetch('https://my-json-server.typicode.com/typicode/demo/posts')
    .then((response) => response.json())
    .then((data) => dispatch({ type: 'LIST_TODO', payload: data }));
};
