const React = require("react");
const Layout = require("./Layout");

function Registration({ title }) {
  return (
    <Layout title={title}>
      <div className="main-container">
        <form action="/api/auth/registration" method="POST">
          <input type="text" name="name" placeholder="Alex" />
          <input type="password" name="password" placeholder="password" />
          <input type="email" name="email" placeholder="Alex@mail.com" />
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Registration;
