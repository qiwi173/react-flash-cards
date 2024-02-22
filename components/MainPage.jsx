const React = require('react');
const Layout = require('./Layout');

function MainPage({ title }) {
  return (
    <Layout title={title} >
      <h1>MainPage</h1>
      <a href="/first-topic">Tema1</a>
      <a href="/second-topic">Tema2</a>
    </Layout>
  );
}

module.exports = MainPage;