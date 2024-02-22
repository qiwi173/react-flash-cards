const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, user}) {
  return (
    <Layout title={title} user={user}>
      <h1>MainPage</h1>
      <a href="/topic/1">Tema1</a>
      <a href="/topic/2">Tema2</a>
    </Layout>
  );
}

module.exports = MainPage;