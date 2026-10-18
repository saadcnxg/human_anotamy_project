import { el, shuffle } from "../utils/dom.js";
import { questions } from "../data/quiz.js";
import { load, save } from "../utils/storage.js";

export function quizView() {
  const root = el("div", { class: "container" });
  const deck = shuffle(questions);
  let index = 0;
  let score = 0;

  function renderQuestion() {
    const item = deck[index];
    const box = el("div", { class: "quiz-box" });
    const progress = el("div", { class: "progress" }, el("span", { style: `width:${(index / deck.length) * 100}%` }));
    const options = el("div", { class: "options" });

    item.options.forEach((text, i) => {
      const btn = el(
        "button",
        {
          class: "option",
          onclick: () => {
            const buttons = [...options.children];
            buttons.forEach((b) => (b.disabled = true));
            buttons[item.answer].classList.add("correct");
            if (i === item.answer) score++;
            else btn.classList.add("wrong");
            setTimeout(next, 900);
          },
        },
        text
      );
      options.append(btn);
    });

    box.append(progress, el("p", { class: "tag" }, `Question ${index + 1} of ${deck.length}`), el("h2", {}, item.q), options);
    root.replaceChildren(box);
  }

  function next() {
    index++;
    if (index < deck.length) renderQuestion();
    else renderResult();
  }

  function renderResult() {
    const best = Math.max(load("bestScore", 0), score);
    save("bestScore", best);
    root.replaceChildren(
      el(
        "div",
        { class: "quiz-box" },
        el("h2", {}, `You scored ${score} / ${deck.length}`),
        el("p", {}, `Best score: ${best} / ${deck.length}`),
        el("button", { class: "btn", onclick: () => location.reload() }, "Try again"),
        " ",
        el("a", { class: "btn secondary", href: "#/" }, "Home")
      )
    );
  }

  renderQuestion();
  return root;
}