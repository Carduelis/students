import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WarningIcon from 'react-icons/lib/md/warning';
import InfoIcon from 'react-icons/lib/md/info-outline';
import DangerIcon from 'react-icons/lib/md/report';
import CloseIcon from 'react-icons/lib/md/close';
import SuccessIcon from 'react-icons/lib/md/check';
import ClassName from '../helpers/ClassName';
import Button from './Button';

export default class Alert extends Component {
	constructor(...props) {
		super(...props);
		this.state = {
			show: true
		};
		this.onClose = this.onClose.bind(this);
	}
	onClose() {
		this.setState({ show: false });
		if (typeof this.props.onClose === 'function') {
			this.props.onClose();
		}
	}
  render() {
		const { props } = this;
		const { title, icon, children } = props;
		const { size, type } = props;
		let Icon = () => {};
		const className = new ClassName('alert');
		if (size) {
			className.push(size);
		}
		if (type) {
			className.push(type);
			switch (type) {
				case 'warning':
					Icon = WarningIcon;
					break;
				case 'success':
					Icon = SuccessIcon;
					break;
				case 'danger':
					Icon = DangerIcon;
					break;
				case 'info':
					Icon = InfoIcon;
				break;
				default:
				break;
			}
		}
		if (props.onClose) {
			className.push('closable');
		}
		const ShowCloseBtn = typeof props.onClose === 'function' || props.closable;
		if (props.margin) className.push('margin');
		if (props.iconless) {
			className.push('iconless');
			Icon = false;
		}
		if (props.icon) {
			Icon = icon;
		}
		if (!this.state.show) {
			return false;
		}
    return (
      <div className={className.getClass()}>
				{ShowCloseBtn && (
					<div className="alert-close">
						<Button size="sm" type={props.type} icon={<CloseIcon />} handleClick={this.onClose} />
					</div>
				)}
				{Icon && (
					<div className="alert-icon">
						<Icon />
					</div>
				)}
				{Icon && (
					<div className="alert-icon-background">
						<Icon />
					</div>
				)}
				<div className="content">
					{title && <h3>{title}</h3>}
					{children}
				</div>
			</div>
    );
  }
}

Alert.propTypes = {
	type: PropTypes.string,
	size: PropTypes.string,
	title: PropTypes.string,
	margin: PropTypes.bool,
	iconless: PropTypes.bool,
	icon: PropTypes.element,
	closable: PropTypes.bool,
	onClose: PropTypes.func
};
