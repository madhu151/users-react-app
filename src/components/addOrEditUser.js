import React, { Component } from 'react';
import { addOrUpdateUser } from '../actions/addOrEditUser';
import { connect } from 'react-redux';
import '../App.css';

class AddOrEditUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	componentDidMount() {
		console.log('comonent did .........',this.props);
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			name: event.target.form.name.value,
			email: event.target.form.email.value,
			age: event.target.form.age.value,
			mobile: event.target.form.mobile.value
		};
		this.props.addOrUpdateUser(null, data, 'add');
		this.props.history.goBack();
	}
	render() {
		return (
			<React.Fragment>
				<form className=" form-flex">
				<div className="header">
				{this.props.location.state.type}
				{"Add/Edit Details Compnent................."}
				</div>
					<div className="form-group">
						<label for="name">Name</label>
						<input type="text" className="form-control" name="name" placeholder="Enter Name"></input>
					</div>
					<div className="form-group">
						<label for="age">Age</label>
						<input type="number" name="age" className="form-control" max="100" placeholder="Enter Age"></input>
					</div>
					<div className="form-group">
						<label for="email">Email</label>
						<input type="email" name="email" className="form-control" placeholder="Enter Email"></input>
					</div>
					<div className="form-group">
						<label for="mobile">Mobile</label>
						<input type="number" name="mobile" className="form-control" placeholder="Enter Mobile"></input>
					</div>
					<button type="button" className="form-control btn btn-success" onClick={this.handleSubmit}>submit</button>
				</form>
			</React.Fragment>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		userDetails: state.userDetailsReducer.userDetails
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addOrUpdateUser: (id, body, type) => dispatch(addOrUpdateUser(id, body, type))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditUser);
