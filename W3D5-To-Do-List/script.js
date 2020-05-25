const container = document.querySelector('.listlocation')
console.log(container)

//Inputfield
document.getElementById('todoInput').addEventListener('change', ev => {
  const text = ev.target.value
  console.log(text)
})

//Add button
document.getElementById('addItem').addEventListener('click', (ev) => {
  const value = document.getElementById('todoInput').value;
  if (value) addTodoItem(value)
  postTodo(value)
})

//Add tasks to de Dom
const addTodoItem = (text, id, done) => {
  const li = document.createElement('li')
  li.id = id
  const span = document.createElement('span')
  span.innerText = text
  const div = document.createElement('div')
  div.classList.add('buttons')
  const buttonDone = document.createElement('button')
  const buttonRemove = document.createElement('button')
  const imgCheck = document.createElement('img')
  imgCheck.src = 'check.png'
  const imgTrash = document.createElement('img')
  imgTrash.src = 'trash-delete-icon.png'
  buttonDone.classList.add('done')
  buttonRemove.classList.add('remove')
  container.appendChild(li)
  li.appendChild(div)
  li.appendChild(span)
  div.appendChild(buttonDone)
  div.appendChild(buttonRemove)
  buttonDone.appendChild(imgCheck)
  buttonRemove.appendChild(imgTrash)
  const todoInput = document.getElementById('todoInput')
  todoInput.value = ""
  if (done) { li.classList.add('completed') }
  else { li.classList.add('notcompleted') }

  //Change to-do done-state
  buttonDone.addEventListener('click', async (ev) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    li.classList.toggle('completed')

    const results = () => {
      if (done) { result = false }
      else { result = true }
      return results
    }
    results();

    const changeBoleon = () => {
      if (done) { done = false }
      else (done = true)
    }
    changeBoleon();

    var raw = JSON.stringify({ "description": text, "done": result });
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch(`https://wincacademydatabase.firebaseio.com/Robert/Tasks/${id}.json`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      // .then(setTimeout(location.reload()), 100)
      .catch(error => console.log('error', error));
    console.log(done)
  })

  //Delete Todo
  buttonRemove.addEventListener('click', ev => {
    removeTodoItem(id)
    console.log(id)
    deleteTodo(`https://wincacademydatabase.firebaseio.com/Robert/Tasks/${id}.json`)
  })
}


// Remove from DOM
const removeTodoItem = (id) => {
  document.getElementById(id).remove()
}

// API gedeelte
const getTodos = async (url) => {
  try {
    const res = await fetch(url, { method: "GET" })
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}
getTodos("https://wincacademydatabase.firebaseio.com/Robert/Tasks.json")
  .then(todos => {
    const todosArray = Object.keys(todos).map(key => ({
      id: key,
      description: todos[key].description,
      done: todos[key].done
    }))
    console.log(todosArray)
    todosArray.forEach(todo => addTodoItem(todo.description, todo.id, todo.done))
    // todosArray.forEach(todo => console.log(todo.id))
    // todosArray.forEach(todo => console.log(todo.done))
  })

// POST request to API
const postTodo = (todo) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({ "description": todo, "done": false });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("https://wincacademydatabase.firebaseio.com/Robert/Tasks.json", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

// DELETE request to API
const deleteTodo = async (url) => {
  try {
    var raw = "";
    var requestOptions = {
      method: 'DELETE',
      body: raw,
      redirect: 'follow'
    };
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  } catch (error) {
    console.log(error)
  }
}

