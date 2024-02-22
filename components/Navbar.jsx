const React = require("react");

function Navbar({}) {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Main</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          {user ? (<a href="/">Привет {user.name}!</a>) : (<a href="/">Привет дорогой друг!</a>)}
        </li>
        {user ? (
          <li>
            <a>Logout</a>
          </li>
        ) : (
          <li>
            <a href="/auth/registration">Sign Up</a>
          </li>
        )}
      </ul>
    </nav>
  );
}

module.exports = Navbar;
