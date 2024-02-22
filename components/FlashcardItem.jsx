const React = require("react");

function FlashcardItem({ flashcard }) {
  return (
    <div className="cardItem" data-id={flashcard.id}>
      <h1>{flashcard.title}</h1>
      <img src={flashcard.img} />
      <p>{flashcard.description}</p>
      <form>
        <input type="text" name="answer" />
        <button>Ответить</button>
      </form>
    </div>
  );
}

module.exports = FlashcardItem;
