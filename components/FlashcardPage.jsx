const React = require("react");
const Layout = require("./Layout");

function FlashcardPage({ title, flashcard}) {
  return (
    <Layout title={title}>
      <h1>FlashcardPage</h1>
      <FlashcardItem flashcard={flashcard}/>
    </Layout>
  );
}

module.exports = FlashcardPage;
