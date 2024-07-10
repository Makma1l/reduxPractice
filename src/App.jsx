
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from './store/counterSlice'

function App() {
const count = useSelector((store) => store.counter.value);
const dispatch = useDispatch();
  return (
    <>
      <strong className="count">{count}</strong>

      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </>
  );
}

export default App
