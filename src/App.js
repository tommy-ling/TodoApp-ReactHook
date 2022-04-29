import React from 'react'
import TodoApp from './TodoApp';

function App() {
  return (
    <TodoApp />
  );
}

export default App;

// import React, { useReducer } from 'react'

// function countReducer(state, action) {
//   switch(action.type) {
//     case "INCREMENT":
//       return {count: state.count + action.amount};
//     case "DECREMENT": 
//       return {count: state.count - action.amount}
//     case "RESET":
//       return {count: 0}
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(countReducer, {count: 0})
//   // dispatch uses our countReducer function
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({type: "INCREMENT", amount: 1})}>Add 1</button>
//       <button onClick={() => dispatch({type: "DECREMENT", amount: 1})}>Subtract 1</button>
//       <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
//     </div>
//   )
// }

// export default App