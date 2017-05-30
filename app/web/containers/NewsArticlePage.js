import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Home from 'react-icons/lib/md/home';
import Back from 'react-icons/lib/md/arrow-back';

import PageWrapper from '../common/PageWrapper';
import { fetchNewsArticle } from '../../actions/news';

class NewsArticlePage extends Component {
	componentWillMount() {
		window.scrollTo(0, 0);
		console.log(this.props);
		const { id } = this.props.match.params;
		this.props.fetchNewsArticle(id);
	}
	render() {
		const { article, match } = this.props;
		if (Object.keys(article.data).length === 0) {
			return (
				<div>loading...</div>
			);
		}
		const { title, description, tags, content, author, createdAt, updatedAt } = article.data[match.params.id];
		return (
			<PageWrapper>
				<div className="breadcrumbs">
					<div className="breadcrumb breadcrumb-back">
						<Link to="/news"><Back /></Link>
					</div>
					<div className="breadcrumb breadcrumb-link">
						<Link to="/news">Новости</Link>
					</div>
					<div className="breadcrumb breadcrumb-text">
						<span>{title}</span>
					</div>
				</div>
				<h3>{title}</h3>
				<p>{description}</p>
				<hr />
				<div className="right small silent">
					<p>Теги: {tags.map(item => item.label).join(', ')}</p>
					<p>Автор: {author}</p>
					<p>Опубликовано {createdAt}</p>
					{updatedAt && <p>Обновлено {updatedAt}</p>}
				</div>
			</PageWrapper>
		);
	}
}

function mapStateToProps({ news }) {
	return {
		article: news
	};
}

export default withRouter(connect(mapStateToProps, { fetchNewsArticle })(NewsArticlePage));
