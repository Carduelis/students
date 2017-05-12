import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ClassName from '../helpers/ClassName';

const transition = {
	transitionName: 'fade',
	transitionEnterTimeout: 500,
	transitionLeaveTimeout: 300,
	transitionAppear: true,
	transitionAppearTimeout: 450
};
export default class Card extends Component {
	render() {
		const className = new ClassName('card');
		const {
			to,
			title,
			description,
			cover,
			children,
			thumbnail,
			light,
			classModifiers
		} = this.props;
		if (light) className.push('light');
		if (typeof classModifiers === 'string') {
			classModifiers.split(' ').map(item => className.push(item));
		}
		const cardContent = [];
		if (thumbnail || cover) {
			let img = false;
			if (cover) {
				img = <img className="card-cover-img" src={cover} alt={title} title={title} />;
			} else {
				img = <div className="card-cover-loader">Loading picture of &laquo;{title}&raquo;</div>;
			}
			cardContent.push(
				<div key="1" className="card-cover">{img}</div>
			);
		}
		if (title) {
			const jsx = <h2 key="2" className="card-title"><span>{title}</span></h2>;
			cardContent.push(jsx);
		}
		if (description) {
			cardContent.push(<p key="3" className="card-description">{description}</p>);
		}
			cardContent.push(<span className="card-arrow"><MdKeyboardArrowRight /></span>);

			cardContent.push(children);
			const animatedContent = (
				<ReactCSSTransitionGroup {...transition}>
					{cardContent}
				</ReactCSSTransitionGroup>
			);
		if (to) {
			return (<Link to={to} className={className.getClass()}>{animatedContent}</Link>);
		}
			return (<div className={className.getClass()}>{animatedContent}</div>);
	}
}
