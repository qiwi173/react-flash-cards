const React = require("react");
const Layout = require("./Layout");

function Error({ title }) {
  return (
    <Layout title={title}>
      <div className="error-page">
        <h1>404</h1>
        <img
          src="https://www.rush-analytics.ru/wp-content/uploads/2022/01/vse-nachinaetsya-s-idei.-63.png"
          alt="404"
        />
      </div>
    </Layout>
  );
}

module.exports = Error;
