interface Todo {
	text: string;
	completed: boolean;
}

const todoForm = document.querySelector('form#todo')! as HTMLFormElement;
const submitButton = document.querySelector('button[type="submit"]')!; //Non-null assertion operator
const todoList = document.querySelector('#todoList')! as HTMLUListElement;

const todos: Todo[] = loadTodos();
todos.forEach(todo => createToDo(todo));

todoForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event: SubmitEvent): void {
	event.preventDefault();

	const value: string = (event.currentTarget as HTMLFormElement).todo.value;
	createToDo({ text: value, completed: false });
	(<HTMLFormElement>event.currentTarget).todo.value = '';

	todos.push({ text: value, completed: false });
	saveTodos(todos);
}

function createToDo(todo: Todo) {
	const newLi = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.checked = todo.completed;
	checkbox.addEventListener('change', function () {
		todo.completed = this.checked
		saveTodos(todos);
	});

	newLi.textContent = todo.text;
	newLi.appendChild(checkbox);
	todoList.appendChild(newLi);
}

function saveTodos(todos: Todo[]): void {
	localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos(): Todo[] {
	const todos = localStorage.getItem('todos');
	return todos === null ? [] : JSON.parse(todos);
}
