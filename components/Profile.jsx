const React = require("react");
const Layout = require("./Layout");
function Profile({ title, user }) {
  return (
    <Layout title={title}>
      <div className="main-container">
        <div>Name {user.name}</div>
        <div>Score {user.score}</div>
      </div>
    </Layout>
  );
}
module.exports = Profile;
