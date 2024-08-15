import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { RootState } from './redux/store'
import { decrement, increment } from './redux/features/counter/counterSlice';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  

  return (
    <>
      <div className='m-20'>
        <h1>Value : {count}</h1>
        <button onClick={() => dispatch(increment())} className='bg-blue-800 p-2 text-white font-bold rounded-md mt-2'>Add</button>
        <button onClick={() => dispatch(decrement())} className='bg-blue-800 p-2 text-white font-bold ml-4 rounded-md mt-2'>Subtract</button>
      </div>
    </>
  )
}

export default App;
