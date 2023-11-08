import { React,useState} from 'react'
import { Container, List } from '@mui/material'
import Formulario from "../components/Formulario"
import ItemDaLista from "../components/ItemDaLista"

export default function Home() {
    const [todos,setTodos] = useState([]);
    const addTodo = (todo) =>{
        console.log(todo);
        setTodos([...todos,todo]);
    }
    const deleteTodo = (id) =>{
        console.log(id)
        var filtered = todos.filter((todo)=>todo.id!==id)
        console.log(filtered)
        setTodos(filtered)
    }

  return (
    <Container maxWidth="xs"style={{marginTop:"1em", marginBottom:"1em"}} >
        <Formulario addTodo={addTodo} />
        
            <List style={{marginTop:"1em"}}>
                {todos.map((todo) =>
                
                <ItemDaLista key={todo.id} todo={todo} deleteTodo={deleteTodo}
                />
                )}
            </List>
    

    </Container>
  )
}
