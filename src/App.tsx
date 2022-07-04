import { useState } from "react";
import * as C from "./App.Style";
import {Item} from './types/item';
import {ListaItem} from './components/ListaItem';
import {AddArea} from './components/ListaItem/AddArea';

const App = () => {
  
  const[list, setList] = useState<Item[]>([
{id:1, name: 'estudar Uninter', done: false},
{id:2, name: 'estudar B7Web', done: false},
{id:3, name: 'estudar Origamid', done: false},
{id:4, name: 'Lavar a louça', done: false},
{id:5, name: 'Tirar o lixo', done: false},
{id:5, name: 'fazer carinho no gatinho', done: false},



  ]);

  const handleAddTask = (taskName: string) =>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done:false
    });
    setList(newList);
  }

  return(
    <C.Container>
      <C.Area>
       <C.Header>
    Lista de tarefas
        </C.Header>  

       <AddArea onEnter={handleAddTask} />

        {list.map((item, index)=>(
          <ListaItem key = {index} item={item} />
        ))}
      </C.Area>       
    </C.Container>

  );
}

export default App;