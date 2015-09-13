NavHeaderDefinition = {};

NavHeaderDefinition.displayName = 'NavHeader';

NavHeaderDefinition.render = function () {
  var homeButton, usersMenu, usersMenuButton, agenciesMenu, agenciesMenuButton;

  homeButton = < NavElement title='Home' route='/#' />;
  usersMenu = < UsersNavMenu />;
  usersMenuButton = < NavMenuButton title='Users' menu={ usersMenu } />;
  agenciesMenu = < AgenciesNavMenu />;
  agenciesMenuButton = < NavMenuButton title='Agencies' menu={ agenciesMenu } />;

  return (<span>{ homeButton } { usersMenuButton } { agenciesMenuButton }</span>);
};

NavHeader = React.createClass(NavHeaderDefinition);
