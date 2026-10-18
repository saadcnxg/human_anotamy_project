import { el } from "../utils/dom.js";
import { systems } from "../data/systems.js";
import { systemCard } from "../components/card.js";

export function homeView() {
  const partCount = systems.reduce((n, s) => n + s.parts.length, 0);
  return el(
    "div",
    { class: "container" },
    el(
      "section",
      { class: "hero" },
      el("h1", {}, "Explore the Human Body"),
      el("p", {}, "Discover how the body's major systems work together. Browse systems, search organs and test your knowledge."),
      el("a", { class: "btn", href: "#/quiz" }, "Take the quiz")
    ),
    el(
      "div",
      { class: "stats" },
      el("div", { class: "stat" }, el("strong", {}, String(systems.length)), "Systems"),
      el("div", { class: "stat" }, el("strong", {}, String(partCount)), "Structures"),
      el("div", { class: "stat" }, el("strong", {}, "206"), "Adult bones")
    ),
    el("div", { class: "grid" }, systems.map(systemCard))
  );
}