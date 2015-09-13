NavElementDescription = {};

NavElementDescription.displayName = 'NavElement';

NavElementDescription.propTypes = {
  title: React.PropTypes.string.isRequired,
  route: React.PropTypes.string.isRequired
};

NavElementDescription.render = function () {
  return (<button onClick={ this.navigateRoute_ }>{ this.props.title }</button>);
};

NavElementDescription.navigateRoute_ = function () {
  location.href = this.props.route;
};

NavElement = React.createClass(NavElementDescription);
