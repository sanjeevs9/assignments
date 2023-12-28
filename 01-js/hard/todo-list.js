/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.list=[]
  }

add(n){
this.list.push(n);
}
remove(i){
  this.list.splice(i,1);
}
update(i,n){
  if(i>=this.list.length){
    return 
  }
this.list[i]=n
}
getAll(){
  return this.list
}
get(i){
  if(i>=this.list.length){
    return null
  }
  return this.list[i];
}
clear(){
  this.list=[];
}
}

module.exports = Todo;
