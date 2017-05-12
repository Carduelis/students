import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Icons from 'react-icons/lib/md';
import Ink from 'react-ink';
import Card from '../common/Card';

import Button from '../common/Button';


class CampusList extends Component {
	renderLinks(item) {
		const Icon = Icons[item.icon] || Icons.MdBlurOn;
		const icon = <Icon />;
		return (
			<div className="item card-campus" key={item.label}>
				<Card to={item.to} title={item.label} description={item.icon} classModifiers={'easy'}>
					<footer className="card-footer">
						<div className="grid">
							<div className="item">
								<Icons.MdAccessTime /> <span>08:00&thinsp;&ndash;&thinsp;18:00</span>
							</div>
							<div className="item">
								<span>Юго-западная</span> <Icons.MdDirectionsSubway />
							</div>
						</div>
					</footer>
				</Card>
			</div>
		);
	}
	render() {
		console.log(Icons);
		const sections = this.props.sections || dummySections;
		return (
			<div className="">
				{sections.map(this.renderLinks)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		sections: state.sections
	};
}

export default connect(mapStateToProps)(CampusList);

const dummySections = [
	{
		label: 'Кампуса и контакты',
		icon: 'MdBusiness',
		to: 'contacts'
	}, {
		label: 'Об университете',
		icon: 'MdGoat',
		to: 'about'
	}, {
		label: 'Мероприятия',
		icon: 'MdEventAvailable',
		to: 'events'
	}, {
		label: 'Избранное',
		icon: 'MdFavoriteOutline',
		to: 'favorite'
	}, {
		label: 'Подать заявку',
		icon: 'MdFiberNew',
		to: 'applience'
	}, {
		label: 'Расписание занятий',
		icon: 'MdEventNote',
		to: 'schedule'
	}, {
		label: 'Задать вопрос',
		icon: 'MdForum',
		to: 'chat'
	}, {
		label: 'FAQ',
		icon: 'MdForum',
		to: 'faq'
	},
];
