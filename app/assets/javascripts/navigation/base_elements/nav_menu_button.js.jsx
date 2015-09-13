NavMenuButtonDescription = {};

NavMenuButtonDescription.displayName = 'NavMenuButton';

NavMenuButtonDescription.propTypes = {
  title: React.PropTypes.string.isRequired
};

NavMenuButtonDescription.getInitialState = function () {
  return {
    menuVisible: false
  }
};

NavMenuButtonDescription.render = function () {
  var menu;

  menu = this.state.menuVisible ? this.props.menu : null;

  return (
    <span>
      <button onClick={ this.toggleMenuVisibility_ } >{ this.props.title }</button>
      <span>{ menu }</span>
    </span>
  );
};

NavMenuButtonDescription.toggleMenuVisibility_ = function () {
  var visible;

  visible = this.state.menuVisible;
  this.setState({ menuVisible: !visible });
};

NavMenuButton = React.createClass(NavMenuButtonDescription);
