import React, { Component } from 'react';
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

class Breadcrumbs extends Component {
	render() {
		const icon = <MdKeyboardArrowLeft />;
		return (
			<div className="breadcrumbs">
				<div className="overflow-scrolling-outer">
					<div className="overflow-scrolling">
						<div className="inner">
							<span className="breadcrumb breadcrumb-back">
								<Link to="/"><MdKeyboardArrowLeft /> назад</Link>
							</span>
							<span className="breadcrumb breadcrumb-link">
								<Link to="/campuses">Текст</Link>
							</span>
							<span className="breadcrumb breadcrumb-text">
								<span className="label">Текущий раздел</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Breadcrumbs;
