const React = require("react");
const Layout = require("./Layout");
const FlashcardItem = require("./FlashcardItem");

function FlashcardPage({ title, question }) {
  return (
    <Layout title={title}>
      <div className="container">
        <FlashcardItem question={question} />
      </div>
      <div className="pravilno"></div>
    </Layout>
  );
}

module.exports = FlashcardPage;
