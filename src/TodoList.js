import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.create = this.create.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
	}

	create(newTodo) {
		this.setState({ todos: [...this.state.todos, newTodo] });
	}

	remove(id) {
		this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
	}

	update(id, updatedTask) {
		const updatedTodos = this.state.todos.map(todo => (todo.id === id ? { ...todo, task: updatedTask } : todo));
		this.setState({ todos: updatedTodos });
	}

	render() {
		const todos = this.state.todos.map(todo => (
			<Todo key={todo.id} id={todo.id} task={todo.task} updateTodo={this.update} removeTodo={this.remove} />
		));

		return (
			<div className="TodoList">
				<h1>
					Todo List! <span>A simple React todo list app.</span>
				</h1>
				<ul>{todos}</ul>
				<NewTodoForm createTodo={this.create} />
			</div>
		);
	}
}
