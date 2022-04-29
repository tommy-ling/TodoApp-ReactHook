import React, {useContext} from 'react'
import { TextField } from '@mui/material'
import useInputState from './hooks/useInputState'
import { Cancel } from '@material-ui/icons'
import { IconButton } from '@mui/material'
import { DispatchContext } from './context/todos.context'

function EditTodoForm({ id, task, toggleEditForm }) {
  const dispatch = useContext(DispatchContext)
  const [value, handleChange, reset] = useInputState(task)
  return (
    <>
    <form onSubmit={e => {
      e.preventDefault()
      dispatch({type: 'EDIT', id: id, newTask: value})
      reset()
      toggleEditForm()
    }}
    style={{width: '100%', marginRight: '1rem'}}
    >
      <TextField 
      margin="normal" 
      value={value} 
      onChange={handleChange} 
      fullWidth
      autoFocus />
    </form>
    <IconButton onClick={() => toggleEditForm()}>
      <Cancel />
    </IconButton>
    </>
  )
}

export default EditTodoForm