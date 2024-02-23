const React = require("react");

function FlashcardItem({ question }) {
  return (
    <div className="cardItem">
      <img src={question.img} height={300} />
      <p>{question.name}</p>
      <form className="formAnswer" data-id={question.id}>
        <input type="text" name="answer" />
        <button>Ответить</button>
        <a href={`/topic/${question.categoryId}/${question.id + 1}`}>далее</a>
      </form>
    </div>
  );
}

module.exports = FlashcardItem;
