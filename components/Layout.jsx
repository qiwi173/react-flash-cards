const React = require("react");
const Navbar = require("./Navbar");

function Layout({ title, children, user }) {
  return (
    <html lang="ru">
      <head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles/" />
        <script defer src="/scripts/flash-card.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
