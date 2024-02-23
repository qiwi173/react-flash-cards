const React = require("react");
const Layout = require("./Layout");
const FlashcardItem = require("./FlashcardItem");

function FlashcardPage({ title, questions }) {
  
  return (
    <Layout title={title}>
      <h1>FlashcardPage</h1>
      {questions.map((question) => (
        <FlashcardItem question={question}/>
      ))}
      <div className="container"></div>

      <div className="pravilno"></div>
    </Layout>
  );
}

module.exports = FlashcardPage;
