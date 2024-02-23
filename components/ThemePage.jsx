const React = require("react");

function ThemePage({ category }) {
  return (
    <div>
      <div>{category.name}</div>
      <a href={`/topic/${category.id}/${1}`}>Погнали</a>
    </div>
  );
}

module.exports = ThemePage;
