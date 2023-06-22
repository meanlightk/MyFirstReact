import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import './App.css';
import './index.css'

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
};

export default App;
