const React = require("react");
const Layout = require("./Layout");
const FlashcardItem = require("./FlashcardItem");

function FlashcardPage({ title, question }) {
  
  return (
    <Layout title={title}>
      <h1>FlashcardPage</h1>
      
        <FlashcardItem question={question}/>
     
      <div className="container"></div>

      <div className="pravilno"></div>
    </Layout>
  );
}

module.exports = FlashcardPage;
