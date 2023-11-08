import { TextField } from '@mui/material'
import { Button, Paper } from '@mui/material'
import React, { useState } from 'react'

export default function Formulario({addTodo}) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    const todoObj = {text: text, id :id};
    setId(id+1);
    addTodo(todoObj);
    document.getElementById('outlined-basic').value = null
  }


  return (
    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
         <TextField id="outlined-basic" label="Tarefa" fullWidth onChange={(e) => setText(e.target.value  )}/>
         <Button variantc="contained" onClick={() => todoCreate(text)}>ADD</Button>
      </div>
    </Paper>
  )
}
