import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Card extends Component {
	render() {
		const transition = {
			transitionName: 'fade',
			transitionEnterTimeout: 500,
			transitionLeaveTimeout: 300,
			transitionAppear: true,
			transitionAppearTimeout: 300
		};
		const { cover, title, description, children, to, thumbnail } = this.props;
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
			return (<Link to={to} className="card">{animatedContent}</Link>);
		}
			return (<div className="card">{animatedContent}</div>);
	}
}
