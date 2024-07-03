import { useReducer } from 'react'
import './App.css'

//step 3
const reducer = (state, action) => { 
  console.log(state, action);
  if(action.type === 'incr') { 
    return {count : state.count + 1}
  }
  else if(action.type === 'desc') { 
    return {count : state.count - 1}
  }
  else { 
    throw new Error('unsupported action type');
  }
} 

function App() {
  // const [count, setCount]  =useState(0);
  // console.log(count + 1);
  // console.log(setCount);

  /*
    1. state -> 
    2. dispatch -> 
    3. reducer -> it is a function 
    4. intialState -> it is a intial Value and in This condition could have 0 
  */
  const [state, dispatch] = useReducer(reducer, {count : 0}) // initalState -> 0
  // step 1

  /* 
      reducer -> it is a pure fun in that we have 
      state -> 
      action -> 
  */
 /*Example coffee maker 
  let assume reducer a coffee maker 
    state  be  a coffee
    action  be a water 
    output :-> newState(Coffee)

    what is pure function 
    10 + 10 -> 20 
    in there don't have side effect 
 */

  const handleClickInc = () => { 
    // setCount(count + 1);
    dispatch({type: "incr"})
  }
  const handleClickDec = () => { 
    // setCount(count - 1);
    dispatch({type: "desc"})
  }

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button  onClick={handleClickDec}>-</button>
    </>
  )
}

export default App
