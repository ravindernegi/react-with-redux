import { Provider } from 'react-redux';
import './App.css';
import TodoClass from './TodoClass';

import store from './store';
function App() {
  return (
    <Provider store={store}>
      <TodoClass />
    </Provider>
  );
}

export default App;
