import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewsItem from '../components/NewsItem';
import Alert from '../common/Alert';
import Goat from 'react-icons/lib/md/goat';
import { fetchNews } from '../../actions/news';

const trim = text => {
	if (typeof text === 'string') {
		if (text.length > 103) {
			let trimmedText = text.substr(0, 100);
			trimmedText += '...';
			return trimmedText;
		}
		return text;
	}
	return '';
};

class NewsList extends Component {
	componentWillMount() {
		console.warn('will mount', this.props.page);
		const { page } = this.props.match.params;
		this.props.fetchNews(page);
	}
	componentWillUpdate(prevProps) {
		const { match, pending, error } = this.props;
		const { page } = match.params;
		const prevPage = prevProps.match.params.page;
		console.warn(this.props, prevPage, page, pending, error);
		if (prevPage !== page) {
			if (!pending || error) {
				this.props.fetchNews(prevPage);
			}
		}
	}
	renderList() {
		let description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
		 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
		 aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		 voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
		 officia deserunt mollit anim id est laborum.`;

		const { data, meta, error } = this.props;
		if (Object.keys(data).length === 0 || typeof meta.currentOrder === 'undefined') {
			return (
				<div>
					<NewsItem dumb />
					<NewsItem dumb />
					<NewsItem dumb />
					<NewsItem title="В вузе прошло новое выступление" description={trim(description)} />
				</div>
			);
		}
		// <p dangerouslySetInnerHTML={{ __html: item.detail_text }} />
		return meta.currentOrder.map(id => {
			const item = data[id];
			return (
				<NewsItem key={id} title={item.title} id={id}>
					<p>{trim(item.description)}</p>
					<div className="silent small right">
						{item.tags.map(tag => tag.label).join(', ')}
					</div>
				</NewsItem>
			);
		}
		);
	}
	render() {
		const { children, error } = this.props;
		return (
			<div className="news-list">
				{error && (
					<Alert margin size="sm" type="warning" title="Заголовок ошибки">
						Возникла ошибка при получении данных
					</Alert>
				)}
				{this.renderList()}
				{children}
			</div>
		);
	}
}

function mapStateToProps({ news }) {
	const { data, meta, error, pending } = news;
	return { data, meta, error, pending };
}

export default withRouter(connect(mapStateToProps, { fetchNews })(NewsList));
