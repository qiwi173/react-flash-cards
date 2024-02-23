const formAnswer = document.querySelector(".formAnswer");
if (formAnswer) {
  formAnswer.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { id } = e.target.dataset;
    const { answer } = e.target;
    console.log(answer.value);
    console.log(id);
    const data = {
      answer: answer.value,
    };
    const response = await fetch(`/api/topic/${id}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (res.message === "ok") {
      document.querySelector(".pravilno").innerHTML = "Правильный ответ";
    } else {
      document.querySelector(".pravilno").innerHTML = "Оишбка, вы неправы";
    }
  });
}
