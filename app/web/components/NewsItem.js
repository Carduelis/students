import React, { Component } from 'react';
import Arrow from 'react-icons/lib/md/keyboard-arrow-right';
import { CSSTransitionGroup } from 'react-transition-group';
import { Redirect } from 'react-router-dom';


export default class extends Component {
	constructor(...props) {
		super(...props);
		this.state = {
			redirect: false,
			redirecting: false,
		};
		this.to = this.to.bind(this);
	}
	to() {
		this.setState({ redirecting: true })
		setTimeout(() => {
			this.setState({ redirect: true });
		}, 150);
	}
	render() {
		const { title, description, dumb } = this.props;
		if (dumb) {
			return (
				<div className="news-item news-item-dumb">
					<h3>
						<span /><span />
					</h3>
					<p>
						<span /><span /><span /><span /><span />
						<span /><span /><span /><span />
					</p>
				</div>
			);
		}
		// const transition = {
		// 	transitionName: 'fade',
		// 	transitionAppear: true,
		// 	transitionAppearTimeout: 300,
		// 	transitionEnterTimeout: 300,
		// 	transitionLeaveTimeout: 300,
		// 	transitionEnter: true,
		// 	transitionLeave: true,
		// };
		const transition = {
				transitionName: 'ni',
				transitionEnterTimeout: 500,
				transitionLeaveTimeout: 300,
				transitionAppear: true,
				transitionLeave: true,
				transitionEnter: true,
				transitionAppearTimeout: 300
		};

		if (this.state.redirect) {
			return (<Redirect push to={`/news/${this.props.id}`} />);
		}
		let className = 'news-item unsel';
		if (this.state.redirecting) {
			className += ' active';
		}
		return (
			<CSSTransitionGroup {...transition}>
				<div className={className} onClick={this.to}>
					<h3 className="ellipsis">{title}</h3>
					{description && <p>{description}</p>}
					{this.props.children}
					<span className="arrow">
						<Arrow />
					</span>
				</div>
			</CSSTransitionGroup>
		);
	}
}
