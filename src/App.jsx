import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/count/countSlice'

const App = () => {
  const state = useSelector(store => store.count)
  const dispatch = useDispatch()
  console.log(state);
  return (
    <div>
      <h1>Total Count : {state.count}</h1>
      
      <button 
      className="button-3" 
      type="button"
      onClick={() => dispatch(increment())}
      >Increase</button>

      <button 
      className="button-3" 
      type="button"
      onClick={() => dispatch(decrement())}
      >Decrease</button>
    </div>
  )
}

export default App