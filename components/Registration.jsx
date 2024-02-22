const React = require('react');
const Layout = require('./Layout');

function Registration({ title }) {
  return (
    <Layout title={title}>
      <form action='/registration' method='POST'>
        <input type='text' name='name' placeholder='Alex' />
        <input type='password' name='password' placeholder='password' />
        <input type='email' name='email' placeholder='Alex@mail.com' />
        <button>Submit</button>
      </form>
    </Layout>
  );
}

module.exports = Registration;