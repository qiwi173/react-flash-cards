const React = require("react");

function FlashcardItem({ flashcard }) {
  return (
    <div className="cardItem" data-id={flashcard.id}>
      <img src={flashcard.img} />
      <p>{flashcard.question}</p>
      <form className="formAnswer">
        <input type="text" name="answer" />
        <button>Ответить</button>
      </form>
    </div>
  );
}

module.exports = FlashcardItem;
