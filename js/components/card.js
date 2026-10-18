import { el } from "../utils/dom.js";

export function systemCard(system) {
  return el(
    "a",
    { class: "card", href: "#/system/" + system.id, style: `--accent:${system.color}` },
    el("div", { class: "emoji" }, system.icon),
    el("h3", {}, system.name),
    el("p", {}, system.summary)
  );
}