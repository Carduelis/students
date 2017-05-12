import React, { Component } from 'react';

export default class extends Component {
	render() {
		return (
			<div className="content silent small right">
				<p>Создано в Московском Технологическом Университете</p>
				<p>Ваши отзывы и пожелания принимаются <a href="mailto:pavepy@gmail.com">здесь</a></p>
				<hr className="separator" />
				<p className="small silent">Стоимость разработки данного приложения
				могла бы&nbsp;спасти от&nbsp;голода 146000 маленьких жителей&nbsp;Африки,
				но мы выбрали&nbsp;Ваш&nbsp;комфорт!</p>
			</div>
		);
	}
}
