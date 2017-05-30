import React, { Component } from 'react';
import PageWrapper from '../common/PageWrapper';
import NewsFilter from '../containers/NewsPage_Filter';
import Pagination from '../containers/Pagination';
import NewsList from '../containers/NewsPage_List';

class NewsPage extends Component {
	render() {
		return (
			<PageWrapper title="Новости">
				<NewsFilter />
				<NewsList />
				<Pagination entity="news" />
			</PageWrapper>
		);
	}
}

export default NewsPage;
