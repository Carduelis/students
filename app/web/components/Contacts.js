import React, { Component } from 'react';
import CampusList from '../containers/CampusList';
import Heading from '../components/Heading';
import Button from '../common/Button';

export default class Contacts extends Component {
	render() {
		return (
			<div>
				<Heading label="Контакты" />
				<div className="container">
					<h3>Приемная комиссия</h3>
					<Button bordered type="success" label="Позвонить" />
					<Button bordered label="Юридическая информация" />
					<Button bordered label="Реквизиты" />
					<Button label="Позвонить" />
				</div>
				<Heading label="Кампусы" />
				<CampusList />
			</div>
		);
	}
}
