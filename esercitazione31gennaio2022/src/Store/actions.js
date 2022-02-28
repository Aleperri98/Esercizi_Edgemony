export const addTodo = (note) => ({
    type: 'add',
    payload: note,
  });
  
  export const removeTodo = (id) => ({
    type: 'remove',
    payload: id,
  });
  
  export const completed = (id) => ({
    type: 'done',
    payload: id,
  });

  export const priorityTodo = (id) => ({
      type: 'priority',
      payload: id,
  })