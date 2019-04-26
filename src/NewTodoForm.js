import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

export default class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();

		const task = {
			...this.state,
			id: uuid(),
			completed: false
		};

		this.props.createTodo(task);
		this.setState({ task: '' });
	}

	render() {
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<label htmlFor="task">New Todo</label>
				<input
					type="text"
					placeholder="New Todo"
					id="task"
					name="task"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}
