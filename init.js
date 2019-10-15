function saveAndCreateNewCocktail(){
    document.getElementById("savedContainer").classList.remove("hidden");
    document.getElementById("speichern").style = "display:none";
    
}
  const form = document.querySelector('#createTodoForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
	
    const values = Object.fromEntries(new FormData(event.target));
    
    fetch('/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(res => {
      return res.json();
    }).then(todo => {
      createListItem(todo);
    });
  });

  fetch('/todos').then(res => {
    return res.json();
  }).then(todos => {
    todos.forEach(todo => {
      createListItem(todo);
    });
  });

  const todoList = document.querySelector('#todos');

  function createListItem(todo) {
    const listItem = document.createElement("li");
      
    listItem.textContent = todo.title;
    listItem.dataset.id = todo.id;

    todoList.appendChild(listItem);
  }
