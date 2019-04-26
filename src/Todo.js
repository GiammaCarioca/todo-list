import React, { Component } from 'react';
import './Todo.css';

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			task: this.props.task
		};
		this.handleRemove = this.handleRemove.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleRemove() {
		this.props.removeTodo(this.props.id);
	}

	toggleForm() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	handleUpdate(e) {
		e.preventDefault();
		this.props.updateTodo(this.props.id, this.state.task);
		this.setState({ isEditing: false });
	}

	handleChange = e => {
		this.setState({ task: e.target.value });
	};

	render() {
		let result;
		result = (
			<div>
				<form onSubmit={this.handleUpdate}>
					<input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
					<button>SAVE</button>
				</form>
			</div>
		);

		return this.state.isEditing ? (
			result
		) : (
			<div className="Todo">
				<li className="Todo-task">{this.props.task}</li>
				<button className="Todo-edit-form" onClick={this.toggleForm}>
					EDIT
				</button>
				<button onClick={this.handleRemove}>DELETE</button>
			</div>
		);
	}
}
