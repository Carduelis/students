import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function (routeName, stateName, actionsConnect) {
	return function (ComposedComponent) {
		class ConnectedComponent extends Component {
			render() {
				console.error(this.props.routeName, this.props.stateName);
				const { params, path } = this.props.match;
				const { page } = params;

				return (
					<ComposedComponent {...this.props} />
				);
			}
		}
		function defaultMapStateToProps(state) {
			return {
				entityType: routeName,
				entity: state[stateName]
			};
		}
		return withRouter(connect(defaultMapStateToProps, actionsConnect)(ConnectedComponent));
	};
}
