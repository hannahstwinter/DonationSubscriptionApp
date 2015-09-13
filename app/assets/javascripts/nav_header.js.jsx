NavHeaderDefinition = {};

NavHeaderDefinition.displayName = 'NavHeader';

NavHeaderDefinition.render = function () {
  return (<span>Is this thing on?</span>);
};

NavHeader = React.createClass(NavHeaderDefinition);
