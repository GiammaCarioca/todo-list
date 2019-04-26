import React, { Component } from 'react';
import './Todo.css';

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
	}

	handleRemove() {
		this.props.removeTodo(this.props.id);
	}

	render() {
		return (
			<div className="Todo">
				<li className="Todo-task">{this.props.children}</li>
				<button className="Todo-edit-form" onClick={this.props.editTodo}>
					EDIT
				</button>
				<button onClick={this.handleRemove}>DELETE</button>
			</div>
		);
	}
}
