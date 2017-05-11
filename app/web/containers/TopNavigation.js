import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Icons from 'react-icons/lib/md';
import { Link } from 'react-router-dom';
import Ink from 'react-ink';

import Button from '../common/Button';


class TopNavigation extends Component {
	componentWillMount() {

	}
	renderLinks(item) {
		const Icon = Icons[item.icon] || Icons.MdBlurOn;
		const icon = <Icon />;
		return (
			<div className="item" key={item.label}>
				<Link to={item.to} className="btn btn-icon">
					<Icon />
					<Ink />
					<span className="text">{item.label}</span>
				</Link>

			</div>
		);
	}
	render() {
		console.log(Icons);
		const sections = this.props.sections || dummySections;
		return (
			<div className="grid top-navigation">
				{sections.map(this.renderLinks)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		sections: state.navigation.menu
	};
}

export default connect(mapStateToProps)(TopNavigation);

const dummySections = [{
		label: 'FAQ',
		icon: 'MdForum',
		to: 'faq'
	},
];
