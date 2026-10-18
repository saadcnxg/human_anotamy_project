import { el } from "../utils/dom.js";
import { getSystem } from "../data/systems.js";
import { accordion } from "../components/accordion.js";
import { openModal } from "../components/modal.js";

export function systemView(id) {
  const system = getSystem(id);
  if (!system) {
    return el("div", { class: "container" }, el("h2", {}, "System not found"), el("a", { href: "#/" }, "← Back home"));
  }

  const randomFact = () => system.facts[Math.floor(Math.random() * system.facts.length)];

  return el(
    "div",
    { class: "container", style: `--accent:${system.color}` },
    el("a", { href: "#/" }, "← All systems"),
    el(
      "div",
      { class: "system-head" },
      el("h1", {}, `${system.icon} ${system.name}`),
      el("p", {}, system.summary),
      el("button", { class: "btn", onclick: () => openModal("Did you know?", randomFact()) }, "Show a fact")
    ),
    el("h2", {}, "Key structures"),
    accordion(system.parts)
  );
}