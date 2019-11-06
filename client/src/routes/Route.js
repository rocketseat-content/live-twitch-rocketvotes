import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function RouteWrapper({ component: Component, ...rest }) {
  return <Route {...rest} render={props => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
