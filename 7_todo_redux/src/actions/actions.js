const uid = () => Math.random().toString(34).slice(2);

// type property helps us decide what to do with the payload when we process the action

// action creators are NOT actions
// Redux Action Creators RETURN an action
// In our containers file we map the dispatch of these actions or props
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
  
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
}

export function deleteTodo(id){
  return {
    type: "DELETE_TODO",
    payload: id
  }
}

export function addHeadline(obj){
  return{
    type: "ADD_HEADLINE",
    payload: obj
  }
}