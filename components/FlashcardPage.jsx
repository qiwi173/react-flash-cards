const React = require("react");
const Layout = require("./Layout");
const FlashcardItem = require("./FlashcardItem");

function FlashcardPage({ title, flashcard}) {
  return (
    <Layout title={title}>
      <h1>FlashcardPage</h1>
      <div className="container">
      <FlashcardItem flashcard={flashcard}/>
      </div>
    </Layout>
  );
}

module.exports = FlashcardPage;
