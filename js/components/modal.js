import { el } from "../utils/dom.js";

export function openModal(title, body) {
  const root = document.getElementById("modal-root");

  function close() {
    root.replaceChildren();
    document.removeEventListener("keydown", onKey);
  }
  function onKey(e) {
    if (e.key === "Escape") close();
  }

  const overlay = el(
    "div",
    {
      class: "modal-overlay",
      onclick: (e) => {
        if (e.target === overlay) close();
      },
    },
    el(
      "div",
      { class: "modal", role: "dialog", "aria-modal": "true" },
      el("h2", {}, title),
      el("p", {}, body),
      el("button", { class: "btn", onclick: close }, "Close")
    )
  );

  root.replaceChildren(overlay);
  document.addEventListener("keydown", onKey);
}