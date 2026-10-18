import { el } from "../utils/dom.js";

export function accordion(parts) {
  return el(
    "div",
    { class: "accordion" },
    parts.map((p) =>
      el("details", {}, el("summary", {}, p.name), el("p", {}, p.description))
    )
  );
}