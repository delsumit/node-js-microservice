const TODOS = require('../mock-todo/todo-data')

class TodoService{

    constructor(){
        this.TODO_DATA = TODOS;
        console.log('To-Do service called...')
    }

    TODO_DATA = [];


    findAll(){
        return this.TODO_DATA;
    }
    save(todo){
        this.TODO_DATA.push(todo); 
        console.log('Added to list...')
    }
    update(id,todo){
       var forUpdate = this.TODO_DATA.findIndex((data,index)=>data.id===id);
       this.TODO_DATA[forUpdate] = todo
       console.log('Todo Updated...')
    }
    delete(id,todo){
        var forUpdate = this.TODO_DATA.findIndex((data,index)=>data.id===id);      
        delete this.TODO_DATA[forUpdate]
        console.log('Todo Deleted...')
     }

}


module.exports = TodoService;