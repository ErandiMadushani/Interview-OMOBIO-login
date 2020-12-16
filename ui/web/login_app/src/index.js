import React from 'react';
import {Button, Input} from 'antd';
import {gql,graphql} from 'react-apollo';


class App extends React.Component{
render(){
	return(

		<div>
		<input
			name = 'id'
			placeholder = 'NIC'
			value = {this.state.id}
			/>

		<input
			name = 'name'
			placeholder = 'Name'
			value = {this.state.name}
			/>

		<input
			name = 'email'
			placeholder = 'Email'
			value = {this.state.email}
			/>

		<input
			name = 'password'
			placeholder = 'Password'
			value = {this.state.password}
			/>

		<input
			name = 'username'
			placeholder = 'Username'
			value = {this.state.username}
			/>

		<br />

		<Button onClick={() => this.onSubmit()} type="primary">Login</Button>


		</div>


		)

}

}