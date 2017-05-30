import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ArrowDoubleLeft from 'react-icons/lib/fa/angle-double-left';
import ArrowDoubleRight from 'react-icons/lib/fa/angle-double-right';
import ArrowBack from 'react-icons/lib/md/arrow-back';
import ArrowForward from 'react-icons/lib/md/arrow-forward';
import PaginationItem from '../components/PaginationItem';
// import routeStateConnect from '../hoc/routeStateConnect';
import Button from '../common/Button';

class Pagination extends Component {
	componentWillUpdate(props) {
		console.warn(props, this.props);
	}
	render() {

		const { state, entity } = this.props;
		this.meta = state[entity].meta;
		if (!this.meta) {
			return false;
		}
		const { page, totalPages, itemsPerPage } = this.meta;
		const firstPageRef = `/${entity}`;
		const prevPageRef = `/${entity}/page/${Number(page) - 1}`;
		const nextPageRef = `/${entity}/page/${Number(page) + 1}`;
		const lastPageRef = `/${entity}/page/${totalPages}`;
		return (
			<div className="small center">
				<div className="pagination justify-content">
					<PaginationItem
						condition={Number(page) === 1}
						direction="left"
						to={firstPageRef}
						icon={<ArrowDoubleLeft />}
					/>
					<PaginationItem
						condition={Number(page) === 1}
						label="предыдущая"
						direction="left"
						to={prevPageRef}
						icon={<ArrowBack />}
					/>
					<b className="pagination-item">{page}</b>
					<PaginationItem
						condition={Number(page) === totalPages}
						label="следующая"
						direction="right"
						to={nextPageRef}
						icon={<ArrowForward />}
					/>
					<PaginationItem
						condition={Number(page) === totalPages}
						direction="right"
						to={lastPageRef}
						icon={<ArrowDoubleRight />}
					/>
				</div>
				<p className="small silent">Выводится {itemsPerPage} элементов на страницу</p>
			</div>
		);
	}
}

export default withRouter(connect(state => ({ state }))(Pagination));
// export default routeStateConnect('news', 'news')(Pagination);
