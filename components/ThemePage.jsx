const React = require("react");

function ThemePage({ category }) {
  return (
    <div>
      <div>{category.img}</div>
      <div>{category.name}</div>
      <a href={`/topic/${category.id}`}>Погнали</a>
    </div>
  );
}

module.exports = ThemePage;
