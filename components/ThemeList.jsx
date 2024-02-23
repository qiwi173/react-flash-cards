const React = require('react');
const Layout = require('./Layout');
const ThemePage = require('./ThemePage');

function MainPage({ title, user, categoryes}) {
  return (
    <Layout title={title} user={user}>

      {
        categoryes.map((category) => (
          <ThemePage category={category} key={category.id}/>
        ))
      }

    </Layout>
  );
}

module.exports = MainPage;