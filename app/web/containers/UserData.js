import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Arrow from 'react-icons/lib/md/arrow-forward';
import Cog from 'react-icons/lib/md/settings';
import AuthFork from '../hoc/AuthFork.js';
import Button from '../common/Button.js';

class UserData extends Component {
	render() {
		return (
			<div className="content sidebar-content">
				<div className="justify-content sidebar-sub-content">
					<p className="small">Добро пожаловать. Снова.</p>
					<Link to="/settings" className="sidebar-button">
						<Button type="primary" transparent icon={<Cog />} />
					</Link>
				</div>
				<p>Константин Константинопольский</p>
				<i className="muted small">Студент, ИТС-1-10</i>
			</div>
		);
	}
}

const options = {
	replacementComponent: props => (
		<div className="content" {...props}>
			Вы еще не представились, а для получения релевантной информации нужно&nbsp;
			<Link to="/auth">авторизоваться<Arrow /></Link>
		</div>
	)
};

// export default connect()(AuthFork(UserData, options));
export default UserData;
