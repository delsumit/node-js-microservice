const TodoService = require('./services/todo-service');

const todoservice = new TodoService();

function findAllTodos(){
    console.log(todoservice.findAll());
}

function saveTodo(){
    todoservice.save({userId: 1032,id: 1970,title: "Added for Fresh user",completed: true});
}

function updateTodo(){
    todoservice.update(1,{userId: 1,id: 1,title: "Updated for Fresh user",completed: true});
}

function deleteTodo(){
    todoservice.delete(1);
}

findAllTodos();
console.log('Adding an item....')
saveTodo();
console.log('After addding an item....')
findAllTodos();
console.log('Before Updating an item....')
updateTodo();
console.log('After Updating an item....')
findAllTodos();
console.log('Before Deleting an item....')
deleteTodo();
console.log('After Deleteing an item....')
findAllTodos();
