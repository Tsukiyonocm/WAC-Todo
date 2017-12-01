var todoList = {
    todos: [],
    
    //Display Todos
    displayTodos: function(){        
        if (this.todos.length === 0){
            console.log("Your TodoList is empty");
        }
        else {
            console.log("My Todos: ");
            for (var i = 0; i < this.todos.length; i++){
                if (this.todos[i].completed === true){
                    console.log("(x)", this.todos[i].todoText)
                }
                else{
                    console.log("( )", this.todos[i].todoText)
                }
            }
        }
    },
    
    //Add Todos
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    
    //Changes Todos
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    
    //Delete Todos
    deleteTodo: function(position){
        this.deleteTodo.splice(position, 1);
        this.displayTodos();
    },
    
    //Toggle Completed
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    
    //Toggle All
    toggleAll: function(){
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        
        //Get number of completed Todos
        for (var i = 0; i < totalTodos; i++){
            if (this.todos[i].completed === true){
                completedTodos++;
            }
        }
        
        //If everything is true, make everything false.
        if (completedTodos === totalTodos){
            //Make everything false
            for (var i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
        }
        else {
            for(var i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};



var displayTodosButton = document.getElementById("displayTodosButton");
var toggleAllButton = document.getElementById("toggleAllButton");

displayTodosButton.addEventListener('click', function(){
    todoList.displayTodos();
})

toggleAllButton.addEventListener("click", function(){
    todoList.toggleAll();
})