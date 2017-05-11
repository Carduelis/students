import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Icons from 'react-icons/lib/md';
import Ink from 'react-ink';
import Heading from '../components/Heading';
import Breadcrumbs from '../components/Breadcrumbs';

class CampusPage extends Component {
	render() {
		const { id } = this.props.match.params;
		return (
			<div>
				<Breadcrumbs />
				<Heading title={`Campus identifier is ${id}`} />
			</div>
		);
	}
}

export default withRouter(CampusPage);
