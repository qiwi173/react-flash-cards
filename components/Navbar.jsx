const React = require("react");

function Navbar({user}) {
  return (
    <nav>
      <ul>
        <li>
          <a href="/" className="navbar">Main</a>
        </li>
        <li>
          <a href="/profile" className="navbar">Profile</a>
        </li>
        <li>
          {user ? (<a href="/" className="navbar">{user.name}</a>) : (<a href="/" className="navbar"></a>)}
        </li>
        {user ? (
          <li>
            <a className="navbar">Logout</a>
          </li>
        ) : (
          <li>
            <a href="/auth/registration" className="navbar">Sign Up</a>
          </li>
        )}
        <li className="score">
          
        </li>
      </ul>
    </nav>
  );
}

module.exports = Navbar;
