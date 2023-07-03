import Counter from './components/Counter';
import Todos from './components/Todos';
import counter, { increase, decrease } from './counter';

const App = () => {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
