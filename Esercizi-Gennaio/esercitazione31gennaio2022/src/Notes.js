import React from 'react';
import { ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Note from './Note';
import { addTodo } from './Store/actions';

const uuid = require('uuid-v4');


const Notes = () => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onType = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      dispatch(
        addTodo({
          text: e.target.value,
          done: false,
          id: uuid(),
        })
      );
      e.target.value = '';
    }
  };
  return (
    <div>
      <h1>Done</h1>
      <ListGroup as="ol" numbered>
        {todos.filter((todo)=>todo.done===true).map((todo) => (
          <Note key={todo.id} note={todo} />
        ))}
      </ListGroup>

        <h1>Undone</h1>
        <ListGroup as="ol" numbered>
        {todos.filter((todo)=>todo.done===false).map((todo) => (
          <Note key={todo.id} note={todo} />
        ))}
      </ListGroup>


      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">
          Insert a note
        </InputGroup.Text>
        <FormControl
          onKeyDown={onType}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  );
};

export {Notes};