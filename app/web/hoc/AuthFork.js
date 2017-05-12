import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

export default function (ComposedComponent, options = {}) {
  class AuthFork extends Component {
    render() {
      console.log(this.props, this.state, this);
      if (this.props.authenticated) {
        return (
          <ComposedComponent {...this.props} />
        );
      }
			const Replacement = options.replacementComponent;
      if (Replacement === true) {
          return (<div>Для просмотра необходимо авторизоваться</div>);
      } else if (Replacement) {
          return (<Replacement {...this.props} />);
      }
      return null;
    }
  }
  function mapStateToProps(state) {
    return {
      authenticated: state.auth.isAuthenticated
    };
  }
  return connect(mapStateToProps)(AuthFork);
}
