import React from 'react';
import Heading from '../components/Heading';

export default ({ children, title, subtitle }) => (
	<div className="page">
		{title &&
			<Heading title={title}>
				{subtitle && <p className="silent">{subtitle}</p>}
			</Heading>
		}
		{children}
	</div>
);
