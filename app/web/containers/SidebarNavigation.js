import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import * as Icons from 'react-icons/lib/md';

import { toggleSidebar } from '../../actions/interface';

class SidebarNavigation extends Component {
	renderLink(item) {
		const Icon = Icons[item.icon];
		const to = `/${item.to}`;
		return (
			<NavLink
				onClick={item.handleClick}
				key={item.label}
				to={to}
				exact
				className="nav-item nav-item-link"
				activeClassName="nav-item-active"
			>
				<span className="nav-item-metaphor"><Icon /></span>
				<span className="label">{item.label}</span>
				<span className="nav-item-arrow"><Icons.MdKeyboardArrowRight /></span>
			</NavLink>
		);
	}
	renderHomeLink() {
		const item = {
			icon: 'MdHome',
			label: 'Главная',
			to: '',
			handleClick: () => {
				setTimeout(this.props.toggleSidebar, 200);
			}
		};
		return this.renderLink(item);
	}
	render() {
		const handleClick = () => {
			setTimeout(this.props.toggleSidebar, 200);
		};
		const menu = this.props.menu.map(item => ({ ...item, handleClick }));
		return (
			<div className="nav-list">
				{this.renderHomeLink()}
				{menu.map(this.renderLink)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		menu: state.navigation.menu,

	};
}

export default withRouter(connect(mapStateToProps, { toggleSidebar })(SidebarNavigation));
