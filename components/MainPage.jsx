const React = require('react');
const Layout = require('./Layout');

function MainPage({ title }) {
  return (
    <Layout title={title} >
      <h1>MainPage</h1>
      <a href="/">Tema1</a>
      <a href="/">Tema2</a>
    </Layout>
  );
}

module.exports = MainPage;