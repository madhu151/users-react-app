import React, { Component } from 'react';
import { getAllUsers, deleteUser } from '../actions/userDetails';
import { connect } from 'react-redux';

class UserDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	componentDidMount() {
		this.props.getAllUsers();
	}
	editordeletehandle = (id) => {
		this.props.deleteUser(id);
	}
	addUserHandler = () => {
		this.props.history.push('/addOrEditUser', {type: 'add'});
	}
	renderEditComp = (obj) => {
		this.props.history.push('/addOrEditUser', obj);
	}
	render() {
		const rows = this.props.userDetails.map((key, index) => {
			const { _id, mobile, name, age, email } = key //destructuring
			return (
				<tr key={_id}>
					<td>{name}</td>
					<td>{age}</td>
					<td>{mobile}</td>
					<td>{email}</td>
					<td>
						<button id="edit" onClick={() => this.renderEditComp(key)}>EDIT</button>
						<button id="delete" onClick={() => this.editordeletehandle(_id)}>DELETE</button>
					</td>
				</tr>
			)
		})
		return (
			<React.Fragment>
				<div className="header form-flex">
					{"User Detils Component............."}
					</div>
					<div className="container">
						<table className="table table-bordered table-hover ">
							<thead>
								<tr >
									<th>Name</th>
									<th>Age</th>
									<th>Mobile</th>
									<th>Email</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{rows}
							</tbody>
						</table>
						<button className="btn btn-success" onClick={this.addUserHandler}>Add User
                </button>
					</div>
				
			</React.Fragment>

		)
	}
}
const mapStateToProps = (state) => {
	console.log('UserDetails mapStateToProps', state.userDetailsReducer.userDetails)
	return {
		userDetails: state.userDetailsReducer.userDetails
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getAllUsers: () => dispatch(getAllUsers()),
		deleteUser: (id) => dispatch(deleteUser(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
