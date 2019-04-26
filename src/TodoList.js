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
	}

	remove(id) {
		this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
	}

	create(newTodo) {
		this.setState({ todos: [...this.state.todos, newTodo] });
	}

	render() {
		const todos = this.state.todos.map(todo => (
			<Todo key={todo.id} id={todo.id} removeTodo={this.remove}>
				{todo.task}
			</Todo>
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
