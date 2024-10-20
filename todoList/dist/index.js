"use strict";
const todoForm = document.querySelector('form#todo');
const submitButton = document.querySelector('button[type="submit"]'); //Non-null assertion operator
const todoList = document.querySelector('#todoList');
const todos = loadTodos();
todos.forEach(todo => createToDo(todo));
todoForm.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
    event.preventDefault();
    const value = event.currentTarget.todo.value;
    createToDo({ text: value, completed: false });
    event.currentTarget.todo.value = '';
    todos.push({ text: value, completed: false });
    saveTodos(todos);
}
function createToDo(todo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function () {
        todo.completed = this.checked;
        saveTodos(todos);
    });
    newLi.textContent = todo.text;
    newLi.appendChild(checkbox);
    todoList.appendChild(newLi);
}
function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function loadTodos() {
    const todos = localStorage.getItem('todos');
    return todos === null ? [] : JSON.parse(todos);
}
