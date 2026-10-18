import { el } from "../utils/dom.js";

export function aboutView() {
  return el(
    "div",
    { class: "container" },
    el("h1", {}, "About AnatomyHub"),
    el("p", {}, "AnatomyHub is a modular, framework-free site for learning human anatomy. Each body system lives in its own data module, so adding a new one only takes one file and one import."),
    el("p", {}, "The content is simplified for learning. For medical concerns, always consult a qualified professional."),
    el("a", { class: "btn", href: "#/" }, "Start exploring")
  );
}