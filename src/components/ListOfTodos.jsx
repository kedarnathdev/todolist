import React, { useState } from 'react';
import { toast } from 'sonner';
import { Card, CardList, Section, SectionCard, Alert, FormGroup, InputGroup, Button } from '@blueprintjs/core';
const ListOfTodos = () => {
  const [todo, setTodo] = useState('')
  const [todoList, setTodolist] = useState([])
  const addTodo = () => {
    if (!todoList.includes(todo))
    setTodolist([...todoList, todo])
  }
  const removeTodo = (data) => {
    todoList.splice(todoList.indexOf(data), 1)
    console.log(todoList)
    setTodolist([...todoList])
  }
  return (
    <div>
      <Section title="List of Todos">
        <SectionCard padded={true}>
          <FormGroup
            helperText="Todo Text"
            label="Todo"
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="text-input" placeholder="Enter a Todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <Button icon="add" onClick={addTodo}>Add</Button>
          </FormGroup>
          <CardList bordered={true}>
            {todoList.map((data) => (
              <Card key={data} interactive={true} onClick={()=>{
                removeTodo(data)
                toast.error('Deleted')
                }}>
                {data}
              </Card>
            ))}
          </CardList>
        </SectionCard>
      </Section>
    </div>
  );
};

export default ListOfTodos;
