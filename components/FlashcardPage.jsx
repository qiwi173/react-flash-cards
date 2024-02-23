const React = require("react");
const Layout = require("./Layout");
const FlashcardItem = require("./FlashcardItem");

function FlashcardPage({ title, question, user}) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <FlashcardItem question={question} />
      </div>
      <div className="pravilno"></div>
      <div className="ne-pravilno"></div>
    </Layout>
  );
}

module.exports = FlashcardPage;
