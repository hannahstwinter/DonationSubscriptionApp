AgenciesNavMenuDescription = {};

AgenciesNavMenuDescription.displayName = 'AgenciesNavMenu';

AgenciesNavMenuDescription.render = function () {
  var agencies, sign_up, sign_in;

  agencies = < NavElement title="Browse Agencies" route="/agencies" />;
  sign_up = < NavElement title="Sign Up" route="/agencies/new" />;
  sign_in = < NavElement title="Sign In" route="/#" />;

  return (
    <ul className="nav-menu">
      <li className="nav-menu-item">{ agencies }</li>
      <li className="nav-menu-item">{ sign_up }</li>
      <li className="nav-menu-item">{ sign_in }</li>
    </ul>
  );
};

AgenciesNavMenuDescription.navigateRoute_ = function (route) {
  location.href = route;
};

AgenciesNavMenu = React.createClass(AgenciesNavMenuDescription);
