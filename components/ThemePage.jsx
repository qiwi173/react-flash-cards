const React = require("react");

function ThemePage({ category }) {
  return (
    <div>
      <img src={`${category.img}`} alt="была фотография" />
      <div>{category.name}</div>
      <a href={`/topic/${category.id}`}>Погнали</a>
    </div>
  );
}

module.exports = ThemePage;
