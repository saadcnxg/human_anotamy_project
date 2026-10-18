import { el } from "../utils/dom.js";
import { searchParts } from "../data/systems.js";

export function searchView(query) {
  const results = searchParts(query);
  return el(
    "div",
    { class: "container" },
    el("h1", {}, `Results for “${query}”`),
    results.length
      ? results.map(({ system, part }) =>
          el(
            "div",
            { class: "result" },
            el("h3", {}, part.name),
            el("p", {}, part.description),
            el("a", { href: "#/system/" + system.id, class: "tag" }, `${system.icon} ${system.name}`)
          )
        )
      : el("p", {}, "No matching structures found.")
  );
}