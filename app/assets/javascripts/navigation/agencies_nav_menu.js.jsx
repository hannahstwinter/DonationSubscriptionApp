AgenciesNavMenuDescription = {};

AgenciesNavMenuDescription.displayName = 'AgenciesNavMenu';

AgenciesNavMenuDescription.render = function () {
  var agencies, sign_up, sign_in;

  agencies = < NavElement title='Agencies' route='/agencies' />;
  sign_up = < NavElement title='Sign Up' route='/agencies/new' />;
  sign_in = < NavElement title='Sign In' route='/#' />;

  return (
    <span className='nav-menu'>{ agencies } { sign_up } { sign_in }</span>
  );
};

AgenciesNavMenuDescription.navigateRoute_ = function (route) {
  location.href = route;
};

AgenciesNavMenu = React.createClass(AgenciesNavMenuDescription);
