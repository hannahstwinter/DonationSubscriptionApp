UsersNavMenuDescription = {};

UsersNavMenuDescription.displayName = 'UsersNavMenu';

UsersNavMenuDescription.render = function () {
  var new_user, sign_up, sign_in;

  new_user = < NavElement title="Users" route="/users" />;
  sign_up = < NavElement title="Sign Up" route="/users/new" />;
  sign_in = < NavElement title="Sign In" route="/#" />;

  return (
    <ul className="nav-menu">
      <li className="nav-menu-item">{ new_user }</li>
      <li className="nav-menu-item">{ sign_up }</li>
      <li className="nav-menu-item">{ sign_in }</li>
    </ul>
  );
};

UsersNavMenuDescription.navigateRoute_ = function (route) {
  location.href = route;
};

UsersNavMenu = React.createClass(UsersNavMenuDescription);
