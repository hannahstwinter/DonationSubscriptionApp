NavBarDefinition = {};

NavBarDefinition.displayName = 'NavBar';

NavBarDefinition.render = function () {
  var homeButton, usersMenuButton, agenciesMenuButton;

  homeButton = < NavMenuButton title="Home" route="/#" className="home-nav-button" />;
  usersMenuButton = < NavMenuButton title="Donate" menu={ <UsersNavMenu/> } />;
  agenciesMenuButton = < NavMenuButton title="Agencies" menu={ <AgenciesNavMenu/> } />;

  return (
    <div id="nav-bar">
      { homeButton }
      { usersMenuButton }
      { agenciesMenuButton }
    </div>);
};

NavBar = React.createClass(NavBarDefinition);
