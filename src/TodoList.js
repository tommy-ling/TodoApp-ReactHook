import React, {useContext} from 'react'
import Todo from './Todo'
import { Paper } from '@mui/material'
import { List } from '@mui/material'
import { Divider } from '@mui/material'
import {TodosContext} from './context/todos.context'

function TodoList() {
  const todos = useContext(TodosContext)
  if(todos.length) 
    return (
      <Paper>
        <List>
        {todos.map((todo, i) => (
          <>
            <Todo 
            {...todo}
            key={todo.id}
            />
            {i < todos.length -1 && <Divider />}
          </>
        ))}
        </List>
      </Paper>
  )
  return null
}

export default TodoList