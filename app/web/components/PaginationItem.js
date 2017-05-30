import React from 'react';
import { Link } from 'react-router-dom';

export default function PageItem({ condition, direction, icon, to, label }) {
	switch (direction) {
		case 'left':
			if (condition) {
				return (
					<span className="pagination-item">
						{icon}
						<span>&nbsp;{label}</span>
					</span>
				);
			}
			return (
				<Link className="pagination-item" to={to}>
					{icon}
					<span>&nbsp;{label}</span>
				</Link>
			);
		case 'right':
			if (condition) {
				return (
					<span className="pagination-item">
						<span>{label}&nbsp;</span>
						{icon}
					</span>
				);
			}
			return (
				<Link className="pagination-item" to={to}>
					<span>{label}&nbsp;</span>
					{icon}
				</Link>
			);

		default:
			return false;
	}
}
