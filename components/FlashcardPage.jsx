const React = require("react");
const Layout = require("./Layout");

function FlashcardPage({ title, flashcard}) {
  return (
    <Layout title={title}>
      <h1>FlashcardPage</h1>
      <div className="container"></div>
      <FlashcardItem flashcard={flashcard}/>
    </Layout>
  );
}

module.exports = FlashcardPage;
