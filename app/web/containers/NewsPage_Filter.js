import React, { Component } from 'react';
import { connect } from 'react-redux';
import Arrow from 'react-icons/lib/md/keyboard-arrow-down';
import Button from '../common/Button';
import { fetchNews } from '../../actions/news';

class NewsPage extends Component {
	changeTag(e) {
		console.log(e.target.value);
		this.props.fetchNews(e.target.value);
	}
	render() {
		const { children } = this.props;
		return (
			<div className="news-filter small center">
				<span className="silent">Выберите категорию</span>
				<label htmlFor="tag-chooser">
					<select id="tag-chooser" name="tag" className="select-silent" onChange={e => this.changeTag(e)}>
						<option default>Все новости</option>
						<option value="sdfsdf">Кибернетика</option>
						<option value="dfgdfg">Событие</option>
						<option value="dfgdfgfas">Институт ИТ</option>
					</select>
					<Arrow />
				</label>
				{children}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		news: state.news
	};
}

export default connect(mapStateToProps, { fetchNews })(NewsPage);
