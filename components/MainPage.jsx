const React = require('react');
const Layout = require('./Layout');

function MainPage({ title }) {
  return (
    <Layout title={title} >
      <h1>MainPage</h1>
      <a href="/topic/1">Tema1</a>
      <a href="/topic/2">Tema2</a>
    </Layout>
  );
}

module.exports = MainPage;