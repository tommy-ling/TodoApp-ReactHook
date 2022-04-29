import React, {useContext, memo} from 'react'
import useToggle from './hooks/useToggle'
import EditTodoForm from './EditTodoForm'
import { ListItem } from '@mui/material'
import { ListItemText } from '@mui/material'
import { Checkbox } from '@mui/material'
import { IconButton } from '@mui/material'
import { ListItemSecondaryAction } from '@mui/material'
import DeleteIcon from '@material-ui/icons/Delete'
import { Edit } from '@material-ui/icons'
import {DispatchContext} from './context/todos.context'

function Todo({ task, completed, id }) {
  const dispatch = useContext(DispatchContext)
  const [isEditing, toggle] = useToggle(false)
  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? <EditTodoForm id={id} task={task} toggleEditForm={toggle} /> : 
      <>
      <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({type: 'TOGGLE', id: id})}/>
      <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aira-label='Delete' onClick={() => dispatch({type: 'REMOVE', id: id})}>
          <DeleteIcon />
        </IconButton>
        <IconButton aira-label='Edit' onClick={toggle}>
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
      </>
      }
    </ListItem>
  )
}

export default memo(Todo)